import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // Ensures no duplicate emails
        trim: true,
    },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
