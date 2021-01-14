var mysql = require('mysql');
var dbConfig = require('./db.config'); 
var poolextend = require('./poolextend')
var pool = mysql.createPool(poolextend({}, dbConfig))

var fail =  require('./fail')
var jsonMent = require('./returnResult');
module.exports={
    query: function(req, res, next){
        // sql
        var insert = req.sql
        // 返回类型
        var type = req.type
        console.log(req)
        pool.getConnection(function(err,connection){
            if (err) {
                // 失败 返回
                return res.send(fail);
            } 
            connection.query(insert, type, function(err,result) {
                // 返回实例
                res.json({
                    statusCode: 200,
                    statusMsg: '成功',
                    Body: result
                })
                // 销毁 连接
                connection.end();

            })
        })
    },
    add: function (req, res, next) {
        var insert = req.sql
        // 返回类型
        var type = req.type
        console.log(req.sql)
        pool.getConnection(function(err,connection){
            if (err) {
                // 失败 返回
                return res.send(fail);
            } 
            connection.query(insert, type, function(err,result) {
                // 返回实例
                res.json({
                    statusCode: 200,
                    statusMsg: '添加成功',
                    Body: result
                })
                // 销毁 连接
                connection.end();
            })
        })
    }
}