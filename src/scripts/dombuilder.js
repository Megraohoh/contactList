//Import contact component factory
const contactFactory = require("./contactFactory")
//Send data to html article
const outputEl = document.querySelector("#output")
//Contact list component that displays all contacts
let k = 1
const sendContactsToDom = () => {
    //Iterates through database for data to build from
    contactDatabase.contacts.forEach((currentContact)=> {
    //Create section element
    const contactDiv = document.createElement("div")
    contactDiv.setAttribute("class", "contactSection")
    section.id =`div${k++}`

    const nameEl = document.createElement("p")
    nameEl.textContent = 

    })
}

//REQUIRED EXPORTING
module.exports = dombuilder