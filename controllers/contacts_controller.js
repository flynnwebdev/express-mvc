const Contacts = require("../models/contacts");

function newContact(req, res) {
  res.render("home");
}

let create = (req, res) => {
  let { name, email } = req.body;
  Contacts.add(name, email)
    .then(contact => res.render("success", contact))
    .catch(err => res.status(500).send(err));
};

let index = (req, res) => {
  Contacts.get()
    .then(contacts => res.send(contacts))
    .catch(err => res.status(500).send(err));
};

module.exports = {
  newContact,
  create,
  index
};
