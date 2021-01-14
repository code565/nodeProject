var express = require('express');
var router = express.Router();
var db = require('../db')
var returnResult = require('../returnResult')
/* GET home page. */
router.get('/login/', function(req, res) {
    // res.send('user ' + req.query.id)
    var data = {
        sql: `SELECT * FROM test WHERE id = ${req.query.id}`,
        type: {}, // 暂时没用
    }
    db.query(data, res)
});
router.post('/register/', function(req, res) {
    // 没有参数
    if (!req.body) {
        returnResult(req)
        return
    }
    // add 参数 必须字符串包裹
    var data = {
        sql: `INSERT INTO test (userName, password, phone) VALUES ('${req.body.userName}', '${req.body.password}', '${req.body.phone}')`,
        type: {},
    }
    db.add(data, res)
});
// 删除
// DELETE FROM test WHERE id = '7'
// 修改
// UPDATE test SET userName = '傻' WHERE userName = '高雨'
module.exports = router;
