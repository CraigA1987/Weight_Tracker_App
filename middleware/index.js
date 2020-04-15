const profileFunctions = require("../public/js/profile");

const middlewareObj = {}

middlewareObj.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/");
}

module.exports = middlewareObj;