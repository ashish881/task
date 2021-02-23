const express = require('express');
const router = express.Router();

const data = [
    {
        image: 'https://images.unsplash.com/photo-1453747063559-36695c8771bd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        text: 'Italy'
    },
    {
        image: 'https://images.unsplash.com/photo-1441120526655-678eca71862a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1053&q=80',
        text: 'Positano, Italy'
    }
]

router.get('/', (req, res) => {
    res.status(201).send(data);
})

module.exports = router;