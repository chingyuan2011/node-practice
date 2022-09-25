// 基本 promise
// function checkScore = new Promise((resolve, reject) => {
//   console.log("正在批改中");
//   setTimeout(() => {
//     const score = Math.round(Math.random() * 100);
//     if (score >= 60) {
//       resolve(score);
//     } else {
//       reject("不及格");
//     }
//   }, 1000);
// });
// checkScore.then((data) => console.log(data)).catch((err) => console.log(err));

// promise 帶入參數
// function checkScore2(name){
//   return new Promise((resolve, reject) => {
//     console.log("作業二正在批改中");
//     setTimeout(() => {
//       const score = Math.round(Math.random() * 100);
//       if (score >= 60) {
//         resolve(name + score + "分");
//       } else {
//         reject(name + "不及格");
//       }
//     }, 1000);
//   });
// };

// checkScore2("小明")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// 組裝多個 promise
function correctTest3(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const score = Math.round(Math.random() * 100);
      if (score >= 20) {
        resolve({
          name,
          score,
        });
      } else {
        reject({
          name,
          score,
        });
      }
    });
  }, 2000);
}

function checkAward3 (data) {
    return new Promise((resolve, reject) => {
        console.log('正在檢查獎品中...');
        setTimeout(() => {
            if(data.score > 90) {
                resolve({
                    ...data,
                    award: '1000元'
                })
            } else if(data.score >= 60 && data.score <90) {
                resolve({
                    ...data,
                    award: '500元'
                })
            } else {
              console.log('reject');
              reject({
                ...data,
                award: '打手心十下'
              })
            }
        }, 1000);

    })
}

correctTest3("小明")
  .then((data) => checkAward3(data))
  .then((data) => console.log(data))
  .catch((err) => console.log('err', err));
