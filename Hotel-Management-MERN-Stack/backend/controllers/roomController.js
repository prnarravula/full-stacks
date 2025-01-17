const Room = require('../models/roomModel')
const mongoose = require('mongoose')

// get all rooms
const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find({}).sort({roomNumber: -1})
        res.status(200).json(rooms)
    }   catch (error) {
        res.status(400).json({error: error.message})
    }
}


// get a single room
const getRoom = async (req, res) => {
    try {
        const { id } = req.params
        const room = await Room.findById(id)
        res.status(200).json(room)
    }   catch (error) {
        res.status(404).json({error: error.message})
    }
}


// create new room
const createRoom = async (req, res) => {
    const {roomNumber, maxCapacity, price, bookingDetails} = req.body

    // add doc to db
    try {
        const room = await Room.create({roomNumber, maxCapacity, price, bookingDetails})
        res.status(200).json(room)
    }   catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a room
const deleteRoom = async (req, res) => {
    try {
        const { id } = req.params
        const room = await Room.findOneAndDelete({_id: id})
        res.status(200).json(room)
    }   catch(error) {
        res.status(400).json({error: error.message})
    }

}


// update a room
const updateRoom = async (req, res) => {
    try{
    const { id } = req.params
    const room = await Room.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    res.status(200).json(room)
    }   catch(error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    getRooms,
    getRoom,
    createRoom,
    deleteRoom,
    updateRoom
}
