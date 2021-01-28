const mongoose = require("mongoose")
const Schema = mongoose.Schema

const monsterSchema = new Schema({
    vampire: {
        type: String,
        required: true
    },
    wereWolf: {
        type: String,
        required: true
    },
    demon: {
        type: String,
    },
    witch: {
        type: String,
    },
    warlock: {
        type: String,
    }
})
module.exports = mongoose.model("Monster", monsterSchema)