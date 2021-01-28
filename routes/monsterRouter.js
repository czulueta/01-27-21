const express = require("express")
const monsterRouter = express.Router()
const Monster = require("../models/monster.js")

// get all monsters
monsterRouter.get("/", (req, res, next) => {
    Monster.find((err, monsters) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(200).send(monsters)
    })
})
// post a new monster
monsterRouter.post("/", (req, res, next) => {
    const newMonster = new Monster(req.body)
    newMonster.save((err, savedMonster) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(201).send(savedMonster)
    })
})

module.exports = monsterRouter