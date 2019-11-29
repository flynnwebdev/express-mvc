const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const ContactModel = mongoose.model("contact", ContactSchema)

function add(name, email) {
    let contact = { name, email }
    return ContactModel.create(contact)
}

function get() {
    return ContactModel.find()
}

module.exports = {
    add,
    get
}
