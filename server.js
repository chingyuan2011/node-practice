const http = require("http");
const { v4: uuidv4 } = require("uuid");
const errHandler = require("./errHandler");

const todos = [
  {
    title: "工作內容1",
    id: uuidv4(),
  },
];

// req 請求者資料
// res 回傳資料
const requestListener = (req, res) => {
  const headers = {
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, Content-Length, X-Requested-With",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "PATCH, GET, POST, OPTIONS, DELETE",
    "Content-Type": "application/json",
  };

  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });

  if (req.url === "/todos" && req.method === "GET") {
    res.writeHead(200, headers);
    // 網路封包只能解析字串
    res.write(
      JSON.stringify({
        status: "success",
        data: todos,
      })
    );
    res.end();
  } else if (req.url === "/todos" && req.method === "POST") {
    // 取得 request 中的 body
    req.on("end", () => {
      try {
        const title = JSON.parse(data).title;
        if (title !== undefined) {
          const todo = {
            title: title,
            id: uuidv4(),
          };
          todos.push(todo);

          res.writeHead(200, headers);
          res.write(
            JSON.stringify({
              status: "success",
              data: todos,
            })
          );
          res.end();
        } else {
          errHandler(res);
        }
      } catch (err) {
        errHandler(res);
      }
    });
  } else if (req.url === "/todos" && req.method === "DELETE") {
    todos.length = 0;
    res.writeHead(200, headers);
    res.write(
      JSON.stringify({
        status: "success",
        data: todos,
      })
    );
    res.end();
  } else if (req.url.startsWith("/todos/") && req.method === "DELETE") {
    const id = req.url.split("/").pop();
    const index = todos.findIndex((el) => el.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
      res.writeHead(200, headers);
      res.write(
        JSON.stringify({
          status: "success",
          data: todos,
        })
      );
      res.end();
    } else {
      errHandler(res);
    }
  } else if (req.url.startsWith("/todos/") && req.method === "PATCH") {
    req.on("end", () => {
      try {
        const title = JSON.parse(data).title;
        const id = req.url.split("/").pop();
        const index = todos.findIndex((el) => el.id == id);
        if (title && index !== -1) {
          todos[index].title = title;
          res.writeHead(200, headers);
          res.write(
            JSON.stringify({
              status: "success",
              data: todos,
            })
          );
          res.end();
        } else {
          errHandler(res);
        }
      } catch {
        errHandler(res);
      }
    });
  } else if (req.url === "/todos" && req.method === "OPTIONS") {
    // preflight 機制 - 跨網域
    res.writeHead(200, headers);
    res.end();
  } else {
    res.writeHead(404, headers);
    res.write(
      JSON.stringify({
        status: "error",
        message: "錯誤路由",
      })
    );
    res.end();
  }
};

const server = http.createServer(requestListener);
server.listen(3005);
