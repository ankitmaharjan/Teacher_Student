(() => {
    const express = require("express");
    const router = express.Router();
    const userController = require("../controller/createStudent")
    
    
    router.post('/insert-up',userController);
    
    module.exports = router;
})()