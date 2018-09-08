var express = require('express');
var router = express.Router();


/**
 *  获取图片列表
 *  page 页数
 *  limit 每页个数
 *  key 验证key
 */
router.get("/getImg/",function (req,res,next) {
    var page  = req.param("page");
    var limit = req.param("limit");
    var key = req.param("key");

    res.send(page+limit+key)
});

module.exports = router;
