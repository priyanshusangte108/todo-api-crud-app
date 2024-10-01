const express = require("express")
const { gettodos, addtodo, gettodo, updatetodo, removetodo } = require("../controler/todocontroller")

const router  = express.Router()

router.get("/",gettodos)
router.post("/",addtodo)
router.get("/:id",gettodo)
router.put("/:id",updatetodo)
router.delete("/:id",removetodo)

module.exports = router;

