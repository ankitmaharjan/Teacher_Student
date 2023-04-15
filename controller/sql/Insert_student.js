(()=>{
    module.exports=async(id,firstName,lastName,email)=>{
        const helper = require("../../common/index");
        const date  = new Date().toISOString();
        // const output=await helper.mysqlHelper.query("INSERT INTO students(id,firstName,lastname,email,createdAt,updateAt) VALUES ('"+id+"','"+firstName+"','"+lastName+"','"+email+"')");
        const output=await helper.mysqlHelper.query("INSERT INTO students(id,firstName,lastname,email,createdAt,updatedAt) VALUES ('"+id+"','"+firstName+"','"+lastName+"','"+email+"','"+date+"','"+date+"')");

        if(output[0].affectedRows>0){
            return true
        }
        else{
            return false
        }
    }
})()