/**
 * Created by 90453 on 2016/7/8.
 */

var http = require ("http");
//var querystring = require("querystring");

http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-Type":"text/plain"
    });
    res.write("hello world");
    res.end();
}).listen(8080);


