// Make Fun Of Javascript Array in Bangla  Stack Learner //
//--- Start ---//

/* @ 2.3 Title: Traverse Array Element ************/

// const arr = [1, 2, 3, 4, 5];
// const n = arr[3];
// const m = arr[2];
// const x = 1,
//   y = 0;

// console.log(m, n, arr[x] + arr[y], arr[x + y + 1]);

//****** */ Simple Traverse

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//****** */ Array  Sum & Avg

// const arr = [10, 22, 31, 44, 55];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);
// console.log(sum / arr.length);

// let largestNumber = arr[0];
// let secondLarNum = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largestNumber) {
//     secondLarNum = largestNumber;
//     largestNumber = arr[i];
//   } else if (arr[i] > largestNumber && arr[i] < secondLarNum) {
//     secondLarNum = arr[i];
//   }
// }
// console.log(largestNumber);
// console.log(secondLarNum);

/* 2.4 Update Array Elements   ************/

//****** */ Array fill Manual Way--------------------

// const arr1 = new Array(10);

// for (let i = 0; i < arr1.length; i++) {
//   arr1[i] = false;
// }

// console.log(arr1);

//****** */ Array fill--------------------------

// const arr2 = new Array(10);

// arr2.fill(0);
// console.log(arr2);

// const names = ["nayem", "shegufa", "salvy"];
// console.log(names);
// names[0] = "HM Nayem";
// names[1] = "Shegufa Tara";
// names[2] = "Shayaike Salvy";

// console.log(names);

//****** */ Array fill and Update --------------------

// const response = new Array(9);

// response.fill(false);

// for (let i = 0; i < response.length; i++) {
//   const rand = Math.floor(Math.random() * 10 + 1);
//   response[i] = rand > 5 ? "X" : "0";
// }

// console.log(response);

//****** */ Array is Mutable --------------------

// const names = ["nayem", "shegufa", "salvy"];

// function update(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = `${i + 1}. ${arr[i]}`;
//   }
//   // return arr;
// }
// update(names);
// let updateNames = names;
// console.log(names);
// console.log(updateNames);

/* 2.5 Array of Everything-   ************/

//****** */ Array of anything --------------------

// const arr = [10, "ten", true, getTen, { ten: 10 }, [10, 10]];

// console.log(arr);

// function getTen() {
//   return 10;
// }

//****** */ Array of objects --------------------

// const favChannels = [
//   { name: "Stack Learner", url: "https://www.youtube.com/" },
//   { name: "Stack Learner", url: "https://www.youtube.com/" },
//   { name: "Stack Learner", url: "https://www.youtube.com/" },
//   { name: "Stack Learner", url: "https://www.youtube.com/" },
// ];

// console.log(favChannels);

//****** */ Array of Functions --------------------

// const sum = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const times = (a, b) => a * b;
// const div = (a, b) => a / b;
// const mod = (a, b) => a % b;

//****** */ Loop and call all Functions of array --------------------

// const funcs = [sum, sub, times, div, mod];

// const a = 10,
//   b = 20;

// for (let i = 0; i < funcs.length; i++) {
//   const result = funcs[i](a, b);
//   console.log(`${funcs[i].name} = ${result}`);
// }

//****** */ Array of Arrays - Multi Dimensional Array --------------------

// const poinTable = [
//   [0, 0],
//   [3, 5],

//   [5, 7],
//   [10, 23],
// ];
// console.log(poinTable);

//****** */ One Dimensional Traverse --------------------

// for (let i = 0; i < poinTable.length; i++) {
//   console.log(`Point ${i} - x=${poinTable[i][0]} and y=${poinTable[i][1]}`);
// }

//****** */ Two Dimensional Traverse --------------------
// const numbers = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = 0; j < numbers[i].length; j++) {
//     console.log(numbers[i][j]);
//   }
// }

// for (let i = 0; i < poinTable.length; i++) {
//   for (let j = 0; j < poinTable[i].length; j++) {
//     // console.log(poinTable[i][j]);
//     console.log(`Points ${[i]},${[j]} = ${poinTable[i][j]}`);
//   }
// }

//****** */ Matrix Example --------------------

// const matrixA = [
//   [1, 3],
//   [1, 0],
//   [1, 2],
// ];
// const matrixB = [
//   [0, 0],
//   [7, 5],
//   [2, 1],
// ];

// const matrixSum = (matrixA, matrixB) => {
//   const result = [];

//   for (let i = 0; i < matrixA.length; i++) {
//     const row = [];
//     for (let j = 0; j < matrixA[i].length; j++) {
//       row.push(matrixA[i][j] + matrixB[i][j]);
//     }
//     result.push(row);
//   }
//   return result;
// };

// const matrixC = matrixSum(matrixA, matrixB);
// console.log(matrixC);

/* 3.2 Update Existing Elements in Array ************/

// const students = [
//   { id: 1, name: "Sajid" },
//   { id: 2, name: "Abid" },
//   { id: 3, name: "Sujan" },
//   { id: 4, name: "Surobi" },
//   { id: 5, name: "Sumaiya" },
// ];

// const givenID = 3;
// const updateNames = "Sujan ahmed";

// for (let i = 0; i < students.length; i++) {
//   if (givenID === students[i].id) {
//     students[i].name = updateNames;
//     break;
//   }
// }

// console.log(students);

/* 3.3 Delete Elements in Array ************/

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

//----Remove First Element-----//

// numbers.shift();
// console.log(numbers);

//----Remove Last Element-----//

// numbers.pop();
// Or
// numbers.length = numbers.length - 1;

//----Remove Inside Elements - Splice using index-----//

// numbers.splice(2, 3);

//----Remove Inside Elements - Splice using value-----//

// const toBeDeleted = 5;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === toBeDeleted) {
//     numbers.splice(i, 1);
//   }
// }

// console.log(numbers);

//----Filter Array-----//

// const toBeDeleted1 = 7;
// number = numbers.filter((item) => item !== toBeDeleted1);

// console.log(number);

//----Delete Operator-----//
// numbers[1] = undefined;

// delete numbers[1];

//----Reset Whole Array-----//

// let x = [1, 2, 3];
// let y = x;
// y = [];
// console.log(x, y);

//----Alternative-----//

// let xx = [1, 2, 3];
// let yy = xx;
// xx.length = 0;

// console.log(xx, yy);

// console.log(numbers);

/* 3.4 Concat Multiple Array ************/

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = arr1.concat(arr2);
// // console.log(arr3);
// const arr4 = [...arr1, ...arr2];
// // console.log(arr4);

// const arr5 = [].concat(arr1, arr2, 7, 8);
// console.log(arr5);

/* 3.5 Slice Array into Multiple Array ************/

// const arr = [1, 2, 3, 4, 5, 6];
// // Slice
// const sliced = arr.slice(1, 4);
// console.log(sliced);

// //Clone Array
// const cloned = arr.slice();
// console.log(arr === cloned);

// // Array Like Objects to Array
// function toArray() {
//   return Array.prototype.slice.call(arguments);
// }
// const argArray = toArray(4, 2, 7, 9, "test");
// console.log(argArray);
// console.log(argArray.__proto__.constructor);

/* 3.6 Project (Part-1) Create To-do Class ************/

// /**
//  * @param {Array} arr
//  */

// function generateID(arr) {
//   if (arr.length === 0) return 1;
//   return arr[arr.length - 1].id + 1;
// }

// /**
//  * @property todoList
//  * @method addItem
//  * @method update
//  * @method done
//  * @method next
//  * @method find
//  * @method list
//  */

// class Todo {
//   constructor(todoList = []) {
//     this.todoList = todoList;
//   }

//   addItem(text) {
//     const item = {
//       text,
//       id: generateID(this.todoList),
//       created: new Date(),
//     };
//     this.todoList.push(item);
//   }
//   update(id, text) {
//     for (let i = 0; i < this.todoList.length; i++) {
//       if (this.todoList[i].id === id) {
//         this.todoList[i].text = text;
//         break;
//       }
//     }
//   }
//   done() {
//     return this.todoList.shift();
//   }
//   next() {
//     return this.todoList.shift();
//   }
//   list() {
//     return this.todoList.shift();
//   }
//   find(term) {
//     const result = [];
//     for (let i = 0; i < this.todoList.length; i++) {
//       const item = this.todoList[i];
//       if (item.text.toLowerCase().includes(term.toLowerCase())) {
//         result.push(item);
//       }
//     }
//     return result;
//   }
// }

// module.export = Todo;

/* 7.2 Hands on Reduce ************/

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Implementing Sum
// function sumFunc(a, b) {
//   return a + b;
// }

// const sum = numbers.reduce(sumFunc);
// console.log(sum);

// Implementing Average
// const avg = numbers.reduce((acc, cur, index, arr) => {
//   acc += cur;
//   if (index === arr.length - 1) {
//     return acc / arr.length;
//   }
//   return acc;
// });
// console.log(avg);

/* 7.3 Anatomy of Reduce Method************/

// Accumulate - gather together or acquire an increasing number of quantity of

// let numbers = [1, 2, 3, 4, 5];

// Implementing Sum

// function sumFunc(acc, curV) {
//   return acc + curV;
// }
// const sum = numbers.reduce(sumFunc, 10);
// console.log(sum);

/* 7.4 Example Array Flatten ************/

// let nestedArray = [[1, 2], 3, [4, 5], [6]];

// Array Flat Method
// const flatArray1 = nestedArray.flat();
// console.log(flatArray1);

// // We can do the same using reduce method
// const flatArray2 = nestedArray.reduce((acc, cur) => {
//   return acc.concat(cur);
// }, []);
// console.log(flatArray2);

/* 7.5 Example FlatMap ************/

// let arr = [1, 2, 3, 4];

// const map = arr.map((x) => [x * 2]);
// console.log(map);

// const flatMap = arr.flatMap((x) => [x * 2]);
// console.log(flatMap);

// const flatMap1 = arr.flatMap((x) => [x, x * 2]);
// console.log(flatMap1);

// const reducedflatMap = arr.reduce((acc, cur) => {
//   return acc.concat(cur * 2);
// }, []);
// console.log(reducedflatMap);

// const reducedflatMap1 = arr.reduce((acc, cur) => {
//   return acc.concat([cur, cur * 2]);
// }, []);
// console.log(reducedflatMap1);

/* 7.6 Example freequency checker ************/
// const votes = [
//   "Java",
//   "Java",
//   "Python",
//   "Java",
//   "Javascript",
//   "Python",
//   "Javascript",
//   "Javascript",
// ];

// const result = votes.reduce((acc, cur) => {
//   if (acc[cur]) {
//     acc[cur]++;
//   } else {
//     acc[cur] = 1;
//   }
//   return acc;
// }, {});
// console.log(result);

/* 7.7 Implement Our own Reduce************/

// function myReduce(arr, cb, init) {
//   let acc = init,
//     start = 0;
//   if (!init) {
//     acc = arr[0];
//     start = 1;
//   }
//   for (let i = start; i < arr.length; i++) {
//     acc = cb(acc, arr[i], i, arr);
//   }
//   return acc;
// }

// const arr = [1, 2, 3, 4, 5];
// const sum = myReduce(
//   arr,
//   (acc, cur) => {
//     return acc + cur;
//   },
//   10
// );
// console.log(sum);

/* 7.8 Reduce Right ************/

// Understand Reduce Right
// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
//   [7, 8],
// ];

// const result = arr.reduceRight((acc, cur) => {
//   return acc.concat(cur);
// }, []);

// console.log(result);

// // Explain Resduce Right
// const nums = [1, 2, 3, 4];
// const sum = nums.reduceRight((acc, cur) => {
//   console.log(`Acc [${acc}] - Cur [${cur}]`);
//   return acc + cur;
// }, 0);
// console.log(`Sum = ${sum}`);

/* 7.9 Reduce Array into single Object ************/

// let products = [
//   { name: "Javascript Cookbook", price: 350 },
//   { name: "Head First Python", price: 200 },
//   { name: "Head First Java", price: 400 },
//   { name: "Javascript Cookbook", price: 350 },
//   { name: "Head First Java", price: 400 },
//   { name: "Javascript Cookbook", price: 350 },
//   { name: "Javascript Cookbook", price: 350 },
// ];

// const invoice = products.reduce((acc, cur) => {
//   if (acc[cur.name]) {
//     acc[cur.name].quantity++;
//     acc[cur.name].price += cur.price;
//   } else {
//     acc[cur.name] = {
//       price: cur.price,
//       quantity: 1,
//     };
//   }
//   return acc;
// }, {});
// console.log(invoice);

/* 7.10 Matrix Sum ************/

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// Horizontal Sum
// const resultH = matrix.map((row) => {
//   return row.reduce((acc, cur) => acc + cur);
// });
// console.log(resultH);

// Vertical Sum
// const resultV = matrix.reduce((acc, cur) => {
//   return acc.map((v, i) => cur[i] + v);
// });
// console.log(resultV);

// flat Sum
// const flatSum = matrix.reduce((acc, cur) => {
//   return acc + cur.reduce((a, b) => a + b);
// }, 0);
// console.log(flatSum);

/* 7.11 Map and Filter using Reduce ************/

// const numbers = [1, 2, 3, 4, 5];

// Mapped
// const squares = numbers.reduce((acc, cur) => {
//   acc.push(cur * cur);
//   return acc;
// }, []);

// console.log(squares);

// Filter
// const odds = numbers.reduce((acc, cur) => {
//   if (cur % 2 === 1) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);

// console.log(odds);

// Big Array
// const bigArray = [];

// for (let i = 0; i < 5000000; i++) {
//   bigArray.push(i);
// }
// console.log(bigArray);

// Map and Filter Chain - Time Efficiency
// console.time("Both");
// bigArray.filter((v) => v % 2 === 0).map((v) => v * 2);
// console.timeEnd("Both");

// Map and Filter Reduce - Time Efficiency
// console.time("Reduce");
// bigArray.reduce((acc, cur) => {
//   if (cur % 2 === 0) {
//     acc.push(cur * 2);
//   }
//   return acc;
// }, []);
// console.timeEnd("Reduce");

/* 7.12 Compose Functions ************/

// ------ Understand Compose
// const add10 = (n) => n + 10;
// const times3 = (n) => n * 3;
// const div2 = (n) => n / 2;

// const n = 5;
// const x = div2(times3(add10(n)));
// console.log(x);

// ------- Pipe Function - Shortest Way
// const pipe =
//   (...fns) =>
//   (x) =>
//     fns.reduce((v, f) => f(v), n);
// const r1 = pipe(add10, times3, div2)(n);
// console.log(r1);

// ------- Compose Function - Long Way
// const compose = (...fns) => {
//   return (x) => {
//     return fns.reduce((v, f) => f(v), x);
//   };
// };
// const r2 = compose(add10, times3, div2)(n);
// console.log(r2);

/* 7.13 Inspect Nested Object ************/

// const js = {
//   name: "Javascript: All You Need to know",
//   author: {
//     name: "HM Nayem",
//     email: "hasan.m.nayem@gmail.com",
//   },
//   contents: {
//     video: {
//       count: 222,
//     },
//   },
// };

// const node = {
//   name: "Dive into NodeJS",
//   author: {
//     name: "HM Nayem",
//     email: "hasan.m.nayem@gmail.com",
//   },
//   contents: {
//     video: {
//       count: 234,
//     },
//   },
// };

// const react = {
//   name: "Javascript: All You Need to know",
//   author: {
//     name: "HM Nayem",
//     email: "hasan.m.nayem@gmail.com",
//   },
//   contents: {
//     video: {
//       count: 125,
//     },
//     article: {
//       count: 15,
//     },
//     quiz: {
//       count: 10,
//     },
//   },
// };

// const inspectObj = (obj, path, returnValue = 0) => {
//   return path.split(".").reduce((acc, field) => {
//     if (acc) {
//       return acc[field];
//     }
//     return returnValue;
//   }, obj);
// };

// const courses = [js, node, react];

// courses.forEach((course) => {
//   const countArticle = inspectObj(course, "contents.article.count");
//   console.log(countArticle);
//   const countVideo = inspectObj(course, "contents.video.count");
//   const countQuiz = inspectObj(course, "contents.quiz.count");
//   console.log(
//     `Total Video = ${countVideo}, Article=${countArticle} and Quiz =${countQuiz}`
//   );
// });

/* 7.14 Generating Markup from List ************/

// const links = [
//   { name: "Facebook", url: "https://facebook.com" },
//   { name: "Youtube", url: "https://youtube.com" },
//   { name: "Instagram", url: "https://instagram.com" },
//   { name: "Linkedin", url: "https://linkedin.com" },
//   { name: "Twitter", url: "https://twitter.com" },
// ];

// let template = `<ul>{{links}}</ul>`;
// const linklist = links.reduce((acc, cur) => {
//   acc += `<li><a href='${cur.url}'>${cur.name}</a></li>`;
//   return acc;
// }, "");

// template = template.replace("{{links}}", linklist);
// console.log(template);

/* 7.15 Grouping Similar Elements ************/

// const words = [
//   "One",
//   "Two",
//   "Three",
//   "Four",
//   "Five",
//   "Six",
//   "Seven",
//   "Eight",
//   "Nine",
//   "Ten",
// ];
// console.log(words);

// const group = words.reduce((acc, cur) => {
//   const len = cur.length;
//   if (acc[len]) {
//     acc[len].push(cur);
//   } else {
//     acc[len] = [cur];
//   }
//   return acc;
// }, {});

// console.log(group);

/* 7.16 Combining Data from Different Sources ************/

// const courses = [
//   {
//     id: "OC1",
//     name: "Javascript All You Need to know",
//     topic: "javascript",
//     price: "2599",
//   },
//   {
//     id: "OC2",
//     name: "Dive into NodeJS",
//     topic: "nodejs",
//     price: "2599",
//   },
//   {
//     id: "OC3",
//     name: "Understand ReactJS Core Features",
//     topic: "javascript",
//     price: "1799",
//   },
//   {
//     id: "OC4",
//     name: "Understand ReactJS Advanced Features",
//     topic: "javascript",
//     price: "1799",
//   },
//   {
//     id: "OC5",
//     name: "Add to Cart - MERN Project",
//     topic: "mern",
//     price: "4099",
//   },
//   {
//     id: "OC6",
//     name: "Make Fun of Javascript Array",
//     topic: "mern",
//     price: "1799",
//   },
// ];

// const discountedPrice = {
//   OC1: 2099,
//   OC2: 2099,
//   OC3: 1399,
//   OC4: 2099,
//   OC5: 3599,
//   OC6: 1399,
// };

// const updateCourse = courses.reduce((acc, cur) => {
//   if (discountedPrice[cur.id]) {
//     console.log(discountedPrice);
//     console.log(discountedPrice[cur.id]);
//     cur.discountedPrice = discountedPrice[cur.id];
//   } else {
//     cur.discountedPrice = 0;
//   }
//   acc.push(cur);

//   return acc;
// }, []);
// 0;

// console.log(updateCourse);

/* 7.17 Promise Chain ************/

// function createPromise(id) {
//   const randTime = Math.floor(Math.random() * 2000 + 100);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Processing ${id} - Time ${randTime}`);
//       resolve(id);
//     }, randTime);
//   });
// }

// const ids = [1, 2, 3, 4, 5];

// const result = ids.reduce((acc, cur) => {
//   return acc.then(() => {
//     return createPromise(cur);
//   });
// }, Promise.resolve());

// result.then(() => {
//   console.log("Done!!");
// });

/* 7.18 Contact List by group ************/

// const contacts = [
//   {
//     name: "sujan",
//     phone: "01840891509",
//     email: "sujan.ahmed@gmail.com",
//   },
//   {
//     name: "raju",
//     phone: "01840891509",
//     email: "raju.ahmed@gmail.com",
//   },
//   {
//     name: "abdullah",
//     phone: "01840891509",
//     email: "abdullah.ahmed@gmail.com",
//   },
//   {
//     name: "rifat",
//     phone: "01840891509",
//     email: "rifat.ahmed@gmail.com",
//   },
//   {
//     name: "borhan",
//     phone: "01840891509",
//     email: "borhan.ahmed@gmail.com",
//   },
//   {
//     name: "karim",
//     phone: "01840891509",
//     email: "karim.ahmed@gmail.com",
//   },
// ];

// contacts.sort((a, b) => {
//   if (a.name > b.name) return 1;
//   if (a.name < b.name) return -1;
//   return 0;
// });
// console.log(contacts);

// const group = contacts.reduce((acc, cur) => {
//   let groupName = cur.name.charAt(0).toUpperCase();
//   if (acc[groupName]) {
//     acc[groupName].push(cur);
//   } else {
//     acc[groupName] = [cur];
//   }
//   return acc;
// }, {});
// console.log(group);

// const displayList = (group) => {
//   console.log("Displaying Contact Information");
//   console.log("------------------");

//   const keys = Object.keys(group);
//   keys.forEach((key) => {
//     console.log(`Group: ${key}`);
//     console.table(group[key]);
//   });
// };

// displayList(group);

/* 8.2 Implement Bubble Sort ************/

// let myArray = [1, 3, 78, 39, 22, 34, 2, 11, 30, 560, 19, 90];

// const bubbleSort = (array) => {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
// };

// console.log("[Unsorted]", myArray);
// bubbleSort(myArray);
// console.log("[Sorted]", myArray);
