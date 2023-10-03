import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: [20, 'Name must be less than 20 characters'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
});

const User = mongoose.model('User', userSchema);

export default User;
