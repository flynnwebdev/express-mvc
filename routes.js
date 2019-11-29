const express = require("express")
const router = express.Router()
const ContactsController = require("./controllers/contacts_controller")

router.get("/", ContactsController.newContact)
router.post("/contacts", ContactsController.create)
router.get("/contacts", ContactsController.index)

module.exports = router
