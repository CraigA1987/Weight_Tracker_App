const User = require("../../models/user");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// External Script to calculate backend logic used to before rendering the profile page

// Find a user by ID using Mongoose ODM
exports.findUser = (userId) => {
    User.findById(req.user.id, function (err, user) {
        return user;
    })
}

// Calculate BMI based on user input details
function bmi(weight, heightFt, heightIn) {
    let userHeightFtToIn = heightFt * 12;
    let userHeightIn = userHeightFtToIn + heightIn;
    let userHeightCalc = userHeightIn * userHeightIn;
    let bmiWeight = weight * 703;
    let bmiFullScore = bmiWeight / userHeightCalc;
    let bmiScore = bmiFullScore.toFixed(1);
    return bmiScore;
}

// Depending on bmi score, a certain color is output
function bmiColor(bmi) {
    let color;
    if (bmi < 18.5) {
        color = "rgba(63, 165, 191, 0.55)" // blue
    } else if (bmi < 25) {
        color = "rgba(63, 191, 89, 0.62)"; //green
    } else if (bmi < 30) {
        color = "rgba(244, 175, 26, 0.66)"; // orange
    } else {
        color = "rgba(223, 20, 20, 0.55)"; // red
    }
    return color;
}

module.exports = {
    bmi: bmi, // add in any other functions here
    bmiColor: bmiColor,
}
