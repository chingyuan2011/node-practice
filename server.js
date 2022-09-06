const http = require('http')

// req 請求者資料
// res 回傳資料
const requestListener = ((req, res) => {
    const headers = {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "PATCH, GET, POST, OPTIONS, DELETE",
        "Content-Type": "application/json"
    }

    if(req.url === '/' && req.method === 'GET') {
        res.writeHead(200, headers)
        // 網路封包只能解析字串
        res.write(JSON.stringify({
            "status": "success",
            "data": []
        }))
        res.end()
    } else if(req.url === '/' && req.method === 'OPTIONS') {
        // preflight 機制
        res.writeHead(200, headers)
        res.end()
    } else {
        res.writeHead(404, headers)
        res.write(JSON.stringify({
            "status": "error",
            "message": "錯誤路由"
        }))
        res.end()
    }
    
})

const server = http.createServer(requestListener)
server.listen(3005)

