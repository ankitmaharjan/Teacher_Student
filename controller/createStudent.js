(()=>{
    const create_user = require('../controller/sql/insert_student')
    const helper = require("../common/index")
    module.exports = async(req, res, next) => {
        const id= req.body.id;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
            const output2=await create_user(id,firstName,lastName,email)
            
                res.send(output2,'SignUp Succesful')
          
           
       
    }
})()