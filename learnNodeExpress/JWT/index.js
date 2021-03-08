const express = require('express');
const jwt = require('jsonwebtoken');
const port = 3000;

const app = express();



app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, "secretKey", (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Posts Uploaded...',
                authData,
            });
        }
    });
});

app.post('/api/login', (req, res) => {
    const user = {
        id: 1,
        username: 'Muhibullah Khan',
        email: 'muhib@gmail.com'
    };

    jwt.sign({ user: user }, 'security', (err, token) => {
        res.json({
            token,
        });
    });
});



app.get('/api', (req, res) => {
    res.json({
        message: 'Hello There'
    })
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(' ')[1]
        req.token = bearerToken
        next()
    } else {
        res.sendStatus(403)
    }
}

app.listen(port, (req, res) => {
    console.log(`Server Started on ${port}`)
});