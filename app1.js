var http = require('http')

// request: 對方要求申請進到這個 server使用者讀取到網站，會收到的資料
// response: 收到資料後要回傳的資料
http.createServer(function(request, response){
    // 表頭內容 - 200 傳送成功
    // Content-Type 回傳文字給網頁 text/plain； text/html
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.write("hello~")
    // 結束回應
    response.end()

    // 監聽 port
}).listen(8080)

// 可使用 127.0.0.1:8080 看到畫面