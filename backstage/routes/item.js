/**
 * Created by Administrator on 2017/10/31.
 */
var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var conn=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root"
})
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/create', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    var text=req.body.tex;
    console.log(text)
    conn.query("INSERT INTO taobao.user(nr) VALUES "+"('"+text+"')", function(err, data, fields) {  // err 错误  rows形参
        res.send(data);
    });

});
router.post('/tj', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    conn.query("SELECT * FROM taobao.user", function(err, data, fields) {  // err 错误  rows形参
        res.send(data);
    });

});
router.post('/del',function(req,res,next){
    var id=req.body.uid;
    res.header('Access-Control-Allow-Origin','*');
    conn.query('DELETE FROM taobao.user WHERE id='+id,function(err,rows,fileds){
        res.send(rows);
    })
})
module.exports = router;
