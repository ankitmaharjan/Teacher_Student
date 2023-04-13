(()=>{
    module.exports=async(id,firstName,lastName,email)=>{
        const helper = require("../../common/index");
        const output=await helper.mysqlHelper.query("INSERT INTO students(id,firstName,lastname,email,createdAt,updateAt) VALUES ('"+id+"','"+firstName+"','"+lastName+"','"+email+"')");
        if(output[0].affectedRows>0){
            return true
        }
        else{
            return false
        }
    }
})()