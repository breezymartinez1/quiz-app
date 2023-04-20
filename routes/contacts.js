const {Router} = require("express")
const { contactsGet, contactsPost, contactsPut, contactsDelete } = require("../controller/contacts")

const router = Router()

router.get("/", contactsGet)
router.post("/", contactsPost)
router.put("/:id", contactsPut)
router.delete("/:id", contactsDelete)

module.exports = router