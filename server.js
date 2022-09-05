const http = require('http')

// req 請求者資料
// res 回傳資料
const requestListener = ((req, res) => {
    console.log(req.url, req.method);
    res.writeHead(200, {"Content-Type":"text/plain"})
    res.write('hello')
    res.end()
})

const server = http.createServer(requestListener)
server.listen(3005)

