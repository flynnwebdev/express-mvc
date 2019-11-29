const contacts = []

function add(name, email) {
    let contact = { name, email }
    contacts.push(contact)
    return contact
}

function get() {
    return contacts
}

module.exports = {
    add,
    get
}
