const express = 'express';

const router = express.Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {

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
    const { id } = req.params.id;
    if(id) {
        req.user = id;
    } else {
        res.status(400).json({ message: "invalid user id" })
    }
    next();
};

function validateUser(req, res, next) {
    const { body } = req.params.body
    if(body) {
        res.status()
    } else {
        res.status(400).json({ message: "missing user data" })
    // } else {
    //     res.status(400).json({ message: "missing required name field" })
    }
    next();
};

function validatePost(req, res, next) {
    const { body } = req.params.body
    if(body) {

    } else {
        res.status(400).json({ message: "missing post data" })
    }
// } else {
//     res.status(400).json({ message: "missing required text field" })
// }
    next();
};

module.exports = router;
