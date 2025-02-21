import mongoose from 'mongoose';

const DoorsWindowschema = new mongoose.Schema(
    {

        ExternalColor: {
            type: String,
            trim: true,
        },
        InternalColor: {
            type: String,
            trim: true,
        },
        hardwarecolor: {
            type: String,
            trim: true,
        },
        glass: {
            type: String,
            trim: true,
        },
        handle: {
            type: String,
            trim: true,
        },
        knocker: {
            type: String,
            trim: true,
        },
        letterplate: {
            type: String,
            trim: true,
        },
        dstyle: {
            type: String,
            trim: true,
        },

        wcolor: {
            type: String,
            trim: true,
        },
        whardwarecolor: {
            type: String,
            trim: true,
        },
        wstyle: {
            type: String,
            trim: true,
        },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    },
    {
        timestamps: true
    }
);


export default mongoose.models.Door || mongoose.model('Doors-Windows', DoorsWindowschema);