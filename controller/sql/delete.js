(()=>{
    module.exports=async(dlt)=>{
        let obj="";
        const helper = require("../../common/index")
        const output=await helper.mysqlHelper.query("Delete * from students where id="+dlt);
        obj=output[0][0];
        return obj;
    }
})()