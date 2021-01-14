var json = function(res, result) {
    console.log(res, result)
    if (typeof result === 'undefined') {
        res.json({
            code: '500',
            statusMsg: '操作失败'
        });
    } else if (result === 'add') {
        res.json({
            code: '200',
            statusMsg: '添加成功'
        });
    } else if (result === 'delete') {
        res.json({
            code: '200',
            statusMsg: '删除成功'
        });
    } else if (result === 'update') {
        res.json({
            code: '200',
            statusMsg: '更改成功'
        });
    } else if (result.result != 'undefined' && result.result === 'select') {
        res.json({
            code: '200',
            statusMsg: '查找成功',
            data: result.data
        });
    } else if (result.result != 'undefined' && result.result === 'selectall') {
        res.json({
            code: '200',
            statusMsg: '全部查找成功',
            data: result.data
        });
    } else {
        res.json(result);
    }
};
module.exports = json;