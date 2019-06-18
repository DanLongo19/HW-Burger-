var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../controllers/models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(burger_data){
    console.log(burger_data);    
    res.render("index");
    })
 
  })

router.put("/burgers/update", function(req, res) {
    burger.update(req.body.burger_id, function(result){
        console.log(result),
        res.redirect('/');
})


// Export routes for server.js to use.
})
module.exports = router;

