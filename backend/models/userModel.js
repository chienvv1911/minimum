import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'role'
        }
    ]
})

const User = mongoose.model('user', userSchema)
export default User