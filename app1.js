var path = require('path')

// 抓取目錄路徑
console.log(path.dirname('xx/yy/zz.js'))

// 路徑合併
console.log(path.join(__dirname, 'xx'))

// 抓取檔名
console.log(path.basename('/xx/yy/zz.js'))

// 抓取副檔名
console.log(path.extname('/xx/yy/zz.js'))

// 分析路徑
console.log(path.parse('/xx/yy/zz.js'))