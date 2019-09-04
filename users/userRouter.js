const express = require('express');
const Hubs = require('./userDb');
const router = express.Router();

// server.get('/', (req, res) => {
//     res.status(200).json({api: "its working"})
// });

router.post('/', (req, res) => {
    const { user } = res.status.user
    Hubs.insert(user)
    .then(userPost => res.status(200).json(userPost))
    .catch(err => res.status(400).json({err: "Can't post."}))
});

router.post('/:id/posts', (req, res) => {
    const { id, changes } = req.params
    Hubs.update()
    .then()
    .catch(err => res.status(500).json({err: "couldn't update"}))
});

router.get('/', (req, res) => {
    Hubs.get()
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json({ err: "Can't find user."}))
});

router.get('/:id', (req, res) => {
    const { id } = res.status.id
    Hubs.getById(id)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(200).json({ err: "Can't find id"}))
});

router.get('/:id/posts', (req, res) => {
    const { userPost } = req.params.userPost
   Hubs.getUserPosts()
   .then(post => res.status(200).json(post, userPost))
   .catch(err = res.status(400).json({err: 'err'}))
});

router.delete('/:id', (req, res) => {
    const { id } = req.params.id
    Hubs.remove()
    .then(idRemove => res.status(200).json(id, idRemove))
    .catch(err => res.status(400).json({ err: "couldn't delete"}))
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
