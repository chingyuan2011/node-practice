function errHandler(res) {
  const headers = {
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, Content-Length, X-Requested-With",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "PATCH, GET, POST, OPTIONS, DELETE",
    "Content-Type": "application/json",
  };

  res.writeHead(400, headers);
  res.write(
    JSON.stringify({
      status: "error",
      message: "程式錯誤",
    })
  );
  res.end();
}

module.exports = errHandler
