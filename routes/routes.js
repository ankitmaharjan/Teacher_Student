(() => {
    const express = require("express");
    const router = express.Router();
    const userController = require("../controller/createStudent")
    const getAllUser = require("../controller/select_student")

    
    
    router.post('/create_student',userController);
    router.get('/select',getAllUser);
    

    
    module.exports = router;
})()