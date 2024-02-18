const router = require("express").Router();

const {createGallery,getGallery,deleteGallery} = require('../controllers/gallery.controller');

const upload = require("../middlewares/multer.middleware");

router.route ("/").post(upload.array('gallery',10),createGallery).get(getGallery)
router.route("/").delete(deleteGallery);

module.exports = router;