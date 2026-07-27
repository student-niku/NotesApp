const userModel = require("../modles/userModel");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {

        const isUser = await userModel.findOne({
            email: email
        });

        if (isUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }
        const hashPassword = crypto
            .createHash("sha256")
            .update(password)
            .digest("hex");

        const user = await userModel.create({
            username,
            email,
            password:hashPassword
        });

        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            data: user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const hashPassword = crypto
            .createHash("sha256")
            .update(password)
            .digest("hex");

        if (user.password !== hashPassword) {
            return res.status(400).json({
                success: false,
                message: "Invalid Password",
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        res.status(200).json({
            success: true,
            message: "Login Successfully",
            token,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};
const getMe = async (req, res) => {
    try {

        const user = req.user;

        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: {
                _id: user._id,
                username: user.username,
                email: user.email,
            },
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

module.exports = {
    register,
    login,
    getMe
};