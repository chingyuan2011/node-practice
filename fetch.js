console.log('fetch');


// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log('res', data))
//     .catch(err => console.log('err', err))


// XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open("GET", url)
xhr.onload = () => { console.log('xhr', xhr.responseText) }
xhr.onerror = () => { console.log('xhr err', xhr.statusText) }
xhr.send()


// 結合 Promise
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