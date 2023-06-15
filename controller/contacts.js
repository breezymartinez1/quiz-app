const { response } = require("express");

const constactsList = []

const contactsGet = (req, res = response) => {
    res.json({
        data: constactsList
    })
}

const contactsPost = (req, res = response) => {
    let {name, lastname, age, phone, id = null} = req.body
    id = Math.round((Math.random() * 1000000))
    let person = {
        code: new Date().getTime(),
        id, name, lastname, age, phone
    }
    constactsList.push(person)

    res.json({
        msg: "person created",
        code: person.code
    })
}

const contactsPut = (req, res = response) => {
    let {id} = req.params
    req.body

    for (let i = 0; i < constactsList.length; i++) {
        const contact = constactsList[i];

        if(contact.id == id){
           constactsList[i] = {
            ...contact,
            ...req.body
           }
        }
    }

    res.json({
        msg: "Contact updated"
    })
}

const contactsDelete = (req, res = response) => {
    let {id} = req.params

    let idx = constactsList.findIndex((contact) => contact.id == id)
    constactsList.splice(idx, 1)

    res.json({
        msg: "Contact Deleted"
    })
}


module.exports = {
    contactsGet,
    contactsPost,
    contactsPut,
    contactsDelete
}