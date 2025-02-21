import connectMongo from '@/lib/mongodb';
import Window from '@/models/windows';
import User from '@/models/user';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        await connectMongo();

        const { formData, values } = req.body;

        // Create and save User
        const newUser = new User({
            firstName: formData.firstName,
            lastName: formData.lastName,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            houseNumber: formData.houseNumber,
            postalCode: formData.postalCode,
            agree: formData.agree,
        });

        await newUser.save();

        // Create and save Window with user reference
        const newWindow = new Window({
            color: values.window.color?.name,
            hardwarecolor: values.window.hardwarecolor?.image,
            style: values.window.wstyle?.image,
            user: newUser._id,
        });

        await newWindow.save();

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Use TLS
            tls: {
                rejectUnauthorized: false
            },
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        const emailContent = `
            <h3>Your Submission Details</h3>
            <p><strong>Window Style:</strong> ${values.window.wstyle?.image}</p>
            <p><strong>Window Color:</strong> ${values.window.color?.name}</p>
            <p><strong>Hardware Color:</strong> ${values.window.hardwarecolor?.image}</p>
        `;

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: formData.email,
            subject: "Your Submitted Information",
            html: emailContent,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({
            message: 'User and Window saved successfully',
            user: newUser,
            window: newWindow,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({ error: 'Server error', details: error.message });
    }
}