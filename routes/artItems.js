const express = require('express')
const Item = require('../models/ItemModel')
const {
    createItem,
    getItems,
    getItem
} = require('../controllers/itemController')

const router = express.Router()

// GET all items
router.get('/', getItems)

// GET a single item
router.get('/:id', getItem)

// POST a new Item
router.post('/', createItem) 

// DELETE an Item
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new ITEM'})
}) 

// UPDATE an Item
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new ITEM'})
}) 

module.exports = router