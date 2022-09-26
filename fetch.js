const url = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json'


// 1. fetch
// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log('res', data))
//     .catch(err => console.log('err', err))


// 2. XMLHttpRequest
// const xhr = new XMLHttpRequest();
// xhr.open("GET", url)
// xhr.onload = () => { console.log('xhr', xhr.responseText) }
// xhr.onerror = () => { console.log('err',xhr.statusText) }
// xhr.send()

// 3. XMLHttpRequest
// function getUrl (url) {
//  return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url)
//     xhr.onload = () => resolve(xhr.responseText)
//     xhr.onerror = () => reject(xhr.statusText)
//     xhr.send()
//  })
// }

// getUrl(url)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// 4. 手刻 axios
const axios = {
    get: function(url){
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url)
            xhr.onload = () => resolve(xhr.responseText)
            xhr.onerror = () => reject(xhr.statusText)
            xhr.send()
        })
    }
}

axios.get(url)
    .then(data => console.log(data))
    .catch(err => console.log(err))