var mysql = require('mysql');
var dbConfig = require('./db.config'); 
var poolextend = require('./poolextend')
var pool = mysql.createPool(poolextend({}, dbConfig))

var fail =  require('./fail')
var jsonMent = require('./returnResult');
module.exports={
    query: function(req, res, callBack){
        // sql
        var insert = req.sql
        // 返回类型
        var type = req.type
        pool.getConnection(function(err,connection){
            if (err) {
                // 失败 返回
                return res.send(fail);
            } 
            connection.query(insert, {}, function(err, ress) {
                callBack(ress)
            })
            connection.release();
        })
    }
}