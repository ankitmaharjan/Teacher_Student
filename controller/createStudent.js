(() => {
    
    const insert_student = require("../db/models/student")

    module.exports = async(req, res, next) => {
        const id= req.body.id;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;

      
       const output2=await insert_student(id,firstName,lastName,email);
           if(output2 == true){
               res.send('create Succesful')
           }else{
               res.send('create UnSuccesful')
           }
        
    }
    
})()