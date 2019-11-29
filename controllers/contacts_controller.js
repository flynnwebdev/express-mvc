const Contacts = require("../models/contacts")

function newContact(req, res) {
    res.render("home")
}

let create = (req, res) => {
    let { name, email } = req.body
    let contact = Contacts.add(name, email)
    res.render("success", contact)
}

let index = (req, res) => {
    res.send(Contacts.get())
}

module.exports = {
    newContact,
    create,
    index
}
