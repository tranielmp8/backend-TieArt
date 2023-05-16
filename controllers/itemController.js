const Item = require('../models/ItemModel')
const mongoose = require('mongoose')

// GET ALL items
const getItems = async (req, res) => {
    const items = await Item.find({}).sort({createdAt: -1})

    res.status(200).json(items)
}

// GET a Single item
const getItem = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const item = await Item.findById(id)

    if(!item) {
        return res.status(404).json({error: 'No such Item'})
    }

    res.status(200).json(item)
}

// CREATE an item
const createItem = async(req, res) => {
    const { title, description, price, artImage } = req.body

    // add doc to db
    try {
        const item = await Item.create({
            title,
            description,
            price,
            artImage
        })
        // now create response after creating the item
        res.status(200).json(item)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE an item


// UPDATE an item



module.exports = {
    getItems,
    getItem,
    createItem
}