(()=>{
    module.exports=async(search)=>{
        let obj="";
        const helper = require("../../common/index")
        //const output=await helper.mysqlHelper.query("Select * from students where id="+search);
       const output=await helper.mysqlHelper.query("Select * from students");
        // obj=output[0][0];
        return output;
    }
})()