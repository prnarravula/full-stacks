const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roomSchema = new Schema({
    roomNumber: {
        type: Number,
        required: true,
        unique: true,
        min: [0, 'Room number must be positive']
    },

    maxCapacity: {
        type: Number,
        required: true,
        min: [1, 'Room capacity must be greater than 1']
    },

    price: {
        type: Number,
        required: true,
        min: [0, 'Room price must be positive']
    },

    bookingDetails: [
        {
            startDate: {
                type: Date,
                required: true
            },

            endDate: {
                type: Date,
                required: true
            }
        }
    ]
})

module.exports = mongoose.model('Room', roomSchema)


