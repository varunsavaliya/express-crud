import User from '../models/user.schema.js';

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!user) {
            res.status(200).json({
                success: false,
                message: 'Email or password is incorrect'
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Login succesful!',
                user
            })
        }
    } catch (error) {
        res.status(200).json({
            success: false,
            message: error.message,
        })
    }
}

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            throw new Error('Name, Password and Email are required!')
        }

        const userExists = await User.findOne({ email });
        if (!!userExists) {
            throw new Error('User already exists!')
        }


        const user = await User.create({
            name,
            email,
            password
        })
        res.status(200).json({
            success: true,
            message: 'Signup succesful!',
            user
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            message: error.message,
        })
    }
}
