(()=>{
    const select_student = require('../controller/sql/readSelect')
    module.exports = async(req, res, next) => {
            const output2=await select_student();
            
                res.status(200).send(output2);
          
           
       
    }
})()