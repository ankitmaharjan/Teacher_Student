(()=>{
    module.exports=async(id,firstName,lastName,email)=>{
        let obj="";
        const helper = require("../../common/index")
        const output=await helper.mysqlHelper.query("UPDATE students SET id='"+id+"',firstName='"+firstName+"',email='"+email+"' WHERE id ="+id);
        obj=output[0][0];
        return obj;
    }
})()