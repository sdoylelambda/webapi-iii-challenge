const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
   
});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
    // console.log(res)
    // const dataArray = res;
    // res.send(dataArray);

    res.send('Hello from index.js');

    // .then(data => res.status(200).json(data));
    // .catch(err => res.status(500).json({ success: false, err}));
});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
