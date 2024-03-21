let express = require ("express");
let router = express.Router();
let mainController = require ("../controllers/mainController")

router.get ("/", mainController.band)
router.get ("/id/:id", mainController.id)
router.get ("/genero/:genero",mainController.genero)

module.exports= router