import mongoose from 'mongoose';
const { Schema } = mongoose;

const bagSchema = new Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    detail: {
        type: String,
        required: true,
        trim: true
    },
    color: {
        type: String,
        required: true,
        trim: true
    },
    model: {
        type: String,
        trim: true
    },
    brand: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        url: String,
        public_id: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
})

export default mongoose.model("bag", bagSchema);