// fetch wrapper
function dwind(url) {
  return fetch(url).then(response => response.json());
}

const content = document.querySelector("#pre-tag");
const btnList = document.querySelectorAll('button[id^="call-btn"]');

const urls = [];

btnList.forEach((btn, idx) => {
  let url = `http://localhost:9000/api/ajax/docs/t/${btn.innerText}`;
  urls.push(url);
});

btnList.forEach((btn, idx) => {
  const CLICK = 'click';
  btn.addEventListener(CLICK, () => {
    fetch(urls[idx])
    .then(response => response.json())
    .then(data => console.log(data));
  });
});

// 순차 실행(워터폴 대로 순차실행)
// test1();
// function test1() {
//     const result = [];
    
//     dwind(urls[0])
//     .then(data => {
//       console.log(data);
//       result.push(data.name);
    
//       dwind(urls[1]).then(data2 => {
//         console.log(data2);
//         result.push(data2.name);
    
//         dwind(urls[2]).then(data3 => {
//           console.log(data3);
//           result.push(data3.name);
    
//           dwind(urls[3]).then(data4 => {
//             console.log(data4);
//             result.push(data4.name);
    
//             dwind(urls[4]).then(data5 => {
//               console.log(data5);
//               result.push(data5.name);
    
//               dwind(urls[5]).then(data6 => {
//                 console.log(data6);
//                 result.push(data6.name);
//                 console.log(result);
//               });
//             });
//           });
//         });
//       });
//     });
// }


// pending상태인 프로미스를 담아 순차 실행
// const result = [];

// function test2(urls, result) {  
//   const pendingList = [];
//   for (let url of urls) {
//     pendingList.push(dwind(url));
//   }

//   // console.log(pendingList);
//   pendingList.reduce((prev, curr) => {
//     return prev.then(() => {      
//       return curr.then(data => {
//         console.log(data);
//         result.push(data);
//       });
//     });
//   }, Promise.resolve()); 
// }

// const result1 = [];

// test3(urls, result1);

// function test3(urls, result) {
//   return new Promise((resolve, reject) => {
//     urls.reduce((prev, curr) => {
//       return prev.then(() => {      
//         return asHandler(curr, result);
//       });
//     }, Promise.resolve());
//   });
// }

// function asHandler(url, result) {
//   return dwind(url).then(data => result.push(data.name));
// }

