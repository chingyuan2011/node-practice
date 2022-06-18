exports.data = 2

exports.bark = function () {
    return 'Bark!!!'
}

// 不能與 exports.data 共用，會把 bark 的值蓋掉
module.exports = {
    data: 3,
    bark: () => {
        return 'Bark2!!!'
    }
}