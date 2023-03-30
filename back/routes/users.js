const { response } = require("express");
const express = require("express");
const router = express.Router();
// below is where you edit variable names based on your variable/file structure names
const User = require("../models/user");

// GET (all) Users route
router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users)
});

// POST new User
router.post('/adduser', async (req, res) => {
    const newUser = new User(req.body);
    const savedUser = await newUser.save()
    res.json(savedUser)
});

// GET (single) User by ID
router.get('/getuser/:id', async (req, res) => {
    const IDed_User = await User.findById({ _id: req.params.id });
    res.json(IDed_User)
});

// DELETE a User by ID
router.delete('/delete/:id', async (req, res) => {
    const toDelete_User = await User.findByIdAndDelete({ _id: req.params.id });
    res.json(toDelete_User)
});

// UPDATE a User by ID
router.put('/update/:id', async (req, res) => {
    const toUpdate_User = await User.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: req.body }
    );
    res.json(toUpdate_User)
});
module.exports = router