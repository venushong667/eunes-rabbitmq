var app = require('express')();
var http = require('http').Server(app);

const hostname = '0.0.0.0'
const port = 3672;

app.get('/user', (req, res) => {
    let valid = true;
    const username = req.query.username;
    const password = req.query.password;
    // // Admin default user password
    // if (username === 'rabbit' && password === 'password') {
    //     res.status(200).send('allow administrator');
    //     return;
    // }
    console.log('Login with ', username, password);
    if (valid) {
        res.status(200).send('allow');
        return;
    } else {
        res.status(200).send('deny');
        return;
    }
})

app.get('/vhost', (req, res) => {
    let valid = true;
    console.log(`IP: ${req.query.ip} accessing vhost`)
    if (valid) {
        res.status(200).send('allow');
        return;
    } else {
        res.status(200).send('deny');
        return;
    }
})

app.get('/resource', (req, res) => {
    let valid = true;
    if (valid) {
        res.status(200).send('allow');
        return;
    } else {
        res.status(200).send('deny');
        return;
    }
})

app.get('/topic', (req, res) => {
    const username = req.query.username;
    const topic = req.query.routing_key;
    const permission = req.query.permission;
    let valid = true;
    console.log(`${username} accessing topic ${topic} with permission ${permission}`)
    if (valid) {
        res.status(200).send('allow');
        return;
    } else {
        res.status(200).send('deny');
        return;
    }
})

http.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});