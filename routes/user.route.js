const router = require ('express').Router();

const {registerUser,getUser} = require('../controllers/user.controller')

router.route("/register").post(registerUser);
router.route("/login").post(getUser);

module.exports = router;