import connectMongo from '@/lib/mongodb';
import doorsWindows from '@/models/doors-windows';
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
        const doorwindows = new doorsWindows({
            ExternalColor: values.door.ExternalColor?.name,
            InternalColor: values.door.InternalColor?.name,
            hardwarecolor: values.door.color?.name,
            dstyle: values.door.dstyle?.image,
            glass: values.door.glass?.name,
            handle: values.door.handle?.name,
            knocker: values.door.knocker?.name,
            letterplate: values.door.letterplate?.name,

            wstyle: values.window.wstyle?.image,
            whardwarecolor: values.window.hardwarecolor?.image,
            wcolor: values.window.color?.name,
            user: newUser._id,
        });

        await doorwindows.save();

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
            <p><strong>External Color:</strong> ${values.door.ExternalColor?.name}</p>
            <p><strong>Internal Color:</strong> ${values.door.InternalColor?.name}</p>
            <p><strong>Hardware Color:</strong> ${values.door.color?.name}</p>
            <p><strong>Style:</strong> ${values.door.dstyle?.image}</p>
            <p><strong>Glass:</strong> ${values.door.glass?.name}</p>
            <p><strong>Handle:</strong> ${values.door.handle?.name}</p>
            <p><strong>Knocker:</strong> ${values.door.knocker?.name}</p>
            <p><strong>LetterPlate:</strong> ${values.door.letterplate?.name}</p>
            <p><strong>Window Style:</strong> ${values.window.wstyle?.image}</p>
            <p><strong>Window Hardware Color:</strong> ${values.window.hardwarecolor?.image}</p>
            <p><strong>Window Color:</strong> ${values.window.color?.name}</p>
        `;

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: formData.email,
            subject: "Your Submitted Information",
            html: emailContent,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({
            message: 'User and Door saved successfully',
            user: newUser,
            window: newWindow,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({ error: 'Server error', details: error.message });
    }
}