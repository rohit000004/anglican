import mongoose from 'mongoose';

const windowSchema = new mongoose.Schema(
    {
        color: {
            type: String,
            trim: true,
        },
        hardwarecolor: {
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


export default mongoose.models.Window || mongoose.model('Window', windowSchema);