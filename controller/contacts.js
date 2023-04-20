const { response } = require("express");

const constactsList = []

const contactsGet = (req, res = response) => {
    res.json({
        data: constactsList
    })
}

const contactsPost = (req, res = response) => {
    let body = req.body
    body.id = Math.random()
    let quiz = {
        code: new Date().getTime(),
        question: body
    }
    constactsList.push(quiz)

    res.json({
        msg: "Quiz created",
        code: quiz.code
    })
}

const contactsPut = (req, res = response) => {
    let {id} = req.params
    let {name, phone} = req.body

    for (let i = 0; i < constactsList.length; i++) {
        const contact = constactsList[i];

        if(contact.id == id){
            console.log(contact.id, id)
            contact.name = name && name
            contact.phone = phone && phone
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