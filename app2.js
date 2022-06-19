var http = require('http')

// request: 對方要求申請進到這個 server使用者讀取到網站，會收到的資料
// response: 依照使用者資料，回傳結果
http.createServer(function(request, response){
    console.log(request.url) // 127.0.0.1:8080/hello

    // response.writeHead(200, {"Content-Type": "text/plain"})
    // response.write('<h1>hello!!</h1>')

    response.writeHead(200, {"Content-Type": "text/html"})
    response.write('<h1>hello!!</h1>')
    response.end()

}).listen(8080)

// 可使用 127.0.0.1:8080/hello 看到畫面
// console.log 回傳 /, /favicon.ico, /hello

// 輸入網址，發出 request 請求 - request head 資訊
// response 回傳資料 - response head 資訊

// response 定義回傳的資料
// { "Content-Type": "text/plain" }