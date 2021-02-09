var express = require('express');
var router = express.Router();
var db = require('../mql/db')
var returnResult = require('../mql/returnResult')
// 逻辑处理
const controller = require('../controller')

router.get('/', function(req, res) {
    res.send('user: 这是 node 的项目哦')
});


/* GET home page. */
router.get('/login', function(req, res) {
    // res.send('user ' + req.query.id)
    var data = {
        sql: `SELECT * FROM test WHERE phone = ${req.query.phone} and password = ${req.query.password}`,
        type: {}, // 暂时没用
    }
    var self = this
    // 查询sql
    db.query(data, {}, function(params) {
        // 单个页面
        controller.loginEs(res, params)
    })
});
// 注册
router.post('/register', function(req, res) {
    let self = this
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
    var querDate = {
        sql: `SELECT * FROM test WHERE phone = ${req.body.phone}`,
        type: {},
    }
    db.query(querDate,  {}, function(params) {
        console.log(params)
        // 不存在手机号
        if (params.length === 0) {
            addPress()
        } else {
            res.json({
                statusCode: -1,
                statusMsg: '手机号已存在',
                Body: {}
            });
        }
    })
    function addPress() {
        db.query(data,  {}, function(params) {
            res.json({
                statusCode: 1,
                statusMsg: '注册成功',
                Body: {}
            });
        })
    }
});
// 修改
router.post('/modify/', function(req, res) {
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
