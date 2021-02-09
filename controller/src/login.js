let loginEs =  {}

loginEs = function(res, params) {
    let statusCode = 200
    let Body = []
    let statusMsg = ''
    if (params.length === 0) {
        statusCode = -1
        Body = {}
        statusMsg = '未找到，当前信息'
    } else {
        statusCode = 1
        Body = params[0]
        statusMsg = '登录成功'
    }
    // 逻辑处理
    res.json({
        statusCode: statusCode,
        statusMsg: statusMsg,
        Body: Body
    });
}
module.exports =  {
    loginEs
}