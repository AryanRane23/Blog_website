import UserModel from "../models/User.js";

export const registerUser = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        // Check if user exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(200).json({ message: "User already exists", user: existingUser });
        }

        // Create new user
        const newUser = new UserModel({ email });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
