const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        require: [true, 'Enter the name'],
    },
    email: {
        type: String,
        unique: true,
        require: [true, 'Enter the Email!'],
    },
    phone: {
        type: Number,
        minimum: 0
    },
    password: {
        tupe: String,
        require: [true, 'Enter the password'],
    },
    address: {
        type: String
    },
    role_id: {
        type: Number
    },
    create_date: {
        type: Date
    },
    last_activity: {
        type: Date
    }
});