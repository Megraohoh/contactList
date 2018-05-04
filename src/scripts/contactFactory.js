// ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.
const contactFactory = (name, number, address) => {
    const contact = Object.create(null, {
        //Contact component that displays name, phone number, and address
        name: {
            value: name,
            enumerable: true
        },
        phoneNumber: {
            value: number,
            enumerable: true
        },
        contactAddress: {
            value: address,
            enumerable: true
        }
    })
    //New contact objects should push into contact database
    contactDatabase.contacts.push(contact)
}

//REQUIRED FOR EXPORTING TO OTHER FILES
module.exports = contactFactory