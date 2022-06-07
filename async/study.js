/**********  promises chaining *************/

// const promiseChain = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 1000);
//   });

// // then의 return은 promise이거나 아니거나. promise이면 resolve되거나 reject되면 다음 then이 실행됨.
// promiseChain
//     .then((result) => {
//       console.log(result); // 1
//       return result * 2;
//     })
//     .then((result) => {
//       console.log(result); // 2
//       return result * 2;
//     })
//     .then((result) => {
//       console.log(result); // 4
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve(result * 2);
//         }, 2000);
//       });
//     })
//     .then((result) => {
//       console.log(result);
// });
  

// ajax통신
// fetch의 return이 promise라 then을 붙일수있음

//p15
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((post) =>
//     fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
//   )
//   .then((response) => response.json())
//   .then(
//     (user) =>
//       new Promise(function (resolve, reject) {
//         // (*)
//         let p = document.createElement("p");
//         p.setAttribute("id", "myP");
//         let text = document.createTextNode(user.username);
//         p.appendChild(text);
//         document.body.append(p);

//         setTimeout(
//           () => document.body.removeChild(document.getElementById("myP")),
//           3000
//         );
//     })
// )

//p16
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((post) =>
//     fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
//   )
//   .then((response) => response.json())
//   .then(
//     (user) =>
//       new Promise(function (resolve, reject) {        
//         let p = document.createElement("p");
//         p.setAttribute("id", "myP");
//         let text = document.createTextNode(user.username);
//         p.appendChild(text);
//         document.body.append(p);

//         setTimeout(() => {
//           document.body.removeChild(document.getElementById("myP"));
//           resolve(user.username); // resolve를 걸어서 추가 then 가능
//         }, 3000);
//       })
// )
// // 3초 후 동작함
// .then((userName) => alert(`${userName}을 성공적으로 출력하였습니다.`));


// p17
// function loadJson(url) {
//     return fetch(url).then((response) => response.json());
// }
  
// function loadUser(userId) {
//     console.log(userId);
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
//       (response) => response.json()
//     );
// }
  
// function showAvatar(userName) {
// return new Promise(function (resolve, reject) {
//     let p = document.createElement("p");
//     p.setAttribute("id", "myP");
//     let text = document.createTextNode(userName);
//     p.appendChild(text);
//     document.body.append(p);

//     setTimeout(() => {
//     document.body.removeChild(document.getElementById("myP"));
//     resolve(userName);
//     }, 3000);
// });
// }
  
// // 함수를 이용하여 다시 동일 작업 수행
// loadJson("https://jsonplaceholder.typicode.com/posts/1")
// .then((post) => loadUser(post.userId))
// .then((user) => showAvatar(user.username))
// .then((userName) => alert(`Finished showing ${userName}`));


/***promise all** */
// p20
// Promise.all([
//     new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
//     new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
//     new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
//   ]).then(console.log);
  

//p21
// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) =>
//       setTimeout(() => reject(new Error("Whoops!")), 2000)
//     ),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).catch(console.log);
  

// p22
// Promise.allSettled([
//     new Promise((resolve, reject) =>
//       setTimeout(() => reject(new Error("Whoops!")), 1000)
//     ),
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 5000)),
// ]).then(console.log);
  



/*******************Async/await********************** */
// async가 붙은 함수의 return은 promise
// p25
async function fetchAuthorName(postId) {
    const postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await postResponse.json();
    console.log("post", post);
    const userId = post.userId;
  
    try {
      const userResponse = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const user = await userResponse.json();
      return user.name; // promise가 아니지만 자동으로 promise로 묶어서 return됨.
    } catch (err) {
      console.log("Faile to fetch user:", err);
      return "Unknown";
    }
}
fetchAuthorName(1).then((name) => console.log("name:", name));
  


/** *************6페이지 **************/

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done"), 1000);//비동기 동작
// });
   
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("error")), 1000);//비동기 동작
// });

// 
// promise.then(
//     (value) => {console.log(value)}
// ).catch(
//     (error) => {console.log(error)}
// )

// 프로미스에서 작업이 성공하면 (resolve의 값이 넘어옴)
// promise.then((value) => {
//     console.log(value);
// });

// promise.then(
//     console.log(value)
// );



/*********** 2페이지 ***********/

// console.log("1");
// setTimeout(function () {
//  console.log("2");
// }, 3000);
// console.log("3");


// function add(num, callback) {
//     setTimeout(() => {
//       const result = num + 5;
//       callback(result);
//     }, 1000);
// }


// function mul(num, callback) {
//     setTimeout(() => {
//       const result = num * 10;
//       callback(result);
//     }, 1000);
// }

// console.log("start");
// const initNum = 10;

// add(initNum, (result) => {
//     console.log(result);
//     mul(result, (result) => {
//       console.log(result);
//     });
// });
  