//流的方式处理post请求， 数据过多的时候，难以一次接收完数据
//将客户端和服务端看成桶， 流就是水管 ->当接收完成， node会触发监听函数
const http = require("http");

const server=http.createServer((req,res)=>{
        if (req.method==='POST'){
            let postData='';
            //流接收
            req.on('data',chunk=>{
                postData+=chunk.toString()
            })
            //接收完成的监听
            req.on('end',()=>{
                console.log('postData--->',postData)
                res.end(postData)
            })

            console.log('content type--->',req.headers['content-type'])
        }
})

server.listen(5000,()=>{
    console.log('server run at port 5000')
})