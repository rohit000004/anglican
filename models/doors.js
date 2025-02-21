import mongoose from 'mongoose';

const doorSchema = new mongoose.Schema(
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

    },
    {
        timestamps: true
    }
);


export default mongoose.models.Door || mongoose.model('Door', doorSchema);