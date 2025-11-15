// routes/bugRoutes.js
const express = require('express');
const router = express.Router();
const Bug = require('../models/bugModel');

// GET all bugs
router.get('/', async (req, res) => {
    try {
        const bugs = await Bug.find();
        res.json(bugs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new bug
router.post('/', async (req, res) => {
    const bug = new Bug({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status || 'open'
    });

    try {
        const newBug = await bug.save();
        res.status(201).json(newBug);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET single bug by ID
router.get('/:id', getBug, (req, res) => {
    res.json(res.bug);
});

// UPDATE a bug
router.put('/:id', getBug, async (req, res) => {
    if (req.body.title != null) res.bug.title = req.body.title;
    if (req.body.description != null) res.bug.description = req.body.description;
    if (req.body.status != null) res.bug.status = req.body.status;

    try {
        const updatedBug = await res.bug.save();
        res.json(updatedBug);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a bug
router.delete('/:id', getBug, async (req, res) => {
    try {
        await res.bug.remove();
        res.json({ message: 'Bug deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware to get bug by ID
async function getBug(req, res, next) {
    let bug;
    try {
        bug = await Bug.findById(req.params.id);
        if (bug == null) {
            return res.status(404).json({ message: 'Cannot find bug' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.bug = bug;
    next();
}

module.exports = router;
