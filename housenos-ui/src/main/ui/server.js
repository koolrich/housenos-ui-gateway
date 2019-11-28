const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
const router = jsonServer.router('./db/db.json')
const userdb = JSON.parse(fs.readFileSync('./db/users.json', 'UTF-8'))

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789'

const expiresIn = '1h'

// Create a token from a payload 
function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

// Check if the user exists in database
function isAuthenticated({ username, password }) {
    return userdb.users.findIndex(user => user.username === username && user.password === password) !== -1
}

// Login to one of the users from ./users.json
server.post('/housenos-api/login', (req, res) => {
    console.log("login endpoint called; request body:");
    console.log(req.body);
    const { username, password } = req.body;
    if (isAuthenticated({ username, password }) === false) {
        const status = 401
        const title = "Unauthorized"
        const detail = "Bad credentials"
        res.status(status).json({ status, title, detail })
        return
    }

    const authenticatedUser = userdb.users.find(user => {
        return user.username === username
    })

    const access_token = createToken({ username, password })

    res.status(200).json({
        "token": access_token,
        "claims": {
            "sub": authenticatedUser.username,
            "roles": authenticatedUser.roles,
            "firstName": authenticatedUser.firstName,
            "lastName": authenticatedUser.lastName
        }
    })
})

server.use(router)

server.listen(3001, () => {
    console.log('Run Auth API Server')
})



