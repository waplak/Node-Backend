const pool = require("../../config/database");

module.exports={
    create:(data,callBack)=>{
        pool.query(
            `insert into users(rec_id,user_name,password,designation,email)
            values(?,?,?,?,?)`,
            [
                data.rec_id,
                data.user_name,
                data.password,
                data.designation,
                data.email
            ],
            (error,result,fields)=>{
                if(error){
                  return callBack(error);
                }
                return callBack(null,result);
            }
        );
    }
};