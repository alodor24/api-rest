const express = require('express')
const routes = express.Router()
const db = require('../config/connection')


// ------- ROUTES -------
// --- Get all users
routes.get('/', (req, res) => {

    const sql = 'SELECT * FROM Users'

    db.query(sql, (error, data) => {
        if (error) {
            console.log(error)
            return error
        }

        res.json({ 
            message: 'Ok',
            users: data 
        })
    })
})


// --- Create user
routes.post('/', (req, res) => {

    const sql = 'INSERT INTO Users (DNI, Name, Surname, Password) VALUES (?, ?, ?, ?)'
    const values = Object.values(req.body)

    db.query(sql, values, (error, result) => {
        if(error) {
            console.log(error)
            return error
        }

        res.json({
            message: 'User added',
            result
        })
    })
})


// --- Get user by ID
routes.get('/:id', (req, res) => {

    const sql = 'SELECT * FROM Users WHERE Id = ?'
    const ID = req.params.id

    db.query(sql, [ID], (error, data) => {
        if (error) {
            console.log(error)
            return error
        }

        res.json({ 
            message: 'Ok',
            users: data 
        })
    })
})


// --- Update user
routes.put('/', (req, res) => {

    const sql = 'UPDATE Users SET DNI = ?, Name = ?, Surname = ?, Password = ? WHERE Id = ?'
    const values = Object.values(req.body)

    db.query(sql, values, (error, result) => {
        if(error) {
            console.log(error)
            return error
        }

        res.json({
            message: 'User Updated',
            result
        })
    })
})


// --- Delete user
routes.delete('/:id', (req, res) => {

    const sql = 'DELETE FROM Users WHERE Id = ?'
    const ID = req.params.id

    db.query(sql, [ID], (error, result) => {
        if (error) {
            console.log(error)
            return error
        }

        res.json({ 
            message: 'User deleted',
            result
        })
    })
})

module.exports = routes