const http = require('http')

// req 請求者資料
// res 回傳資料
const requestListener = ((req, res) => {
    const headers = {
        "Content-Type":"text/plain"
    }

    if(req.url === '/' && req.method === 'GET') {
        res.writeHead(200, headers)
        res.write('GET!')
        res.end()
    } else if (req.url === '/' && req.method === 'DELETE') {
        res.writeHead(200, headers)
        res.write('DELETE!')
        res.end()
    } else {
        res.writeHead(404, headers)
        res.write('ERROR!')
        res.end()
    }
    
})

const server = http.createServer(requestListener)
server.listen(3005)

