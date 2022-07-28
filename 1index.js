// console.log("Hello World");
// console.warn("This is warning");
// console.error("This is error");

// JavaScript Vraiables
// var num1 = 36;
// var num2 = 56;
// console.log(num1 + num2);
// var str1 = "this is a string eg"
// // var marks = {
// //     ravi: 34,
// //     shubh: 76
// // }
// // console.log(marks);

// var arr = [1, 2, "Array", 3, 4];
// for (var i = 0; i < arr.length; i++) {
//     if (i == 2) {
//         //break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// function avg(a, b) {
//     return (a + b) / 2;
// }
// c = avg(4, 7);
// console.log(c);
// arr.forEach(function (element) {
//     console.log(element);
// })

// Constant variable
// const ac = 0;
// ac++; //error assignment to constant variable 
// let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

// let myArr = ["Fan", "Camera", 34, null, true];

// Array Methods
// console.log(myArr.length);
// myArr.pop();
// console.log(myArr);
// myArr.push("Manvi");
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// myArr.unshift("Manvi");
// console.log(myArr);
// myArr.toString();
// console.log(myArr);

//String Methods in Javascript
// let str1 = "I am going for for for lunch";
// console.log(str1.length);
// console.log(str1.indexOf("for"));
// console.log(str1.lastIndexOf("for"));

// console.log(str1.slice(0, 3));
// d = str1.replace("lunch", "running");
// console.log(d, str1);


// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());

//DOM Manipulation

// let elem = document.getElementById('click');
// console.log(elem);

// let elem = document.getElementsByClassName('container');
// console.log(elem);
// elem[0].style.background = "yellow";
// elem[0].classList.add("bg-primary");
// elem[0].classList.remove("bg-primary");
// console.log(elem[0].innerHTML);
// console.log(elem[0].innerText);
// tn = document.getElementsByTagName('button');
// console.log(tn);

// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created paragraph";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);

//Selecting using Query
// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);

// function clicked() {
//     console.log("The button was clicked");
// }
// window.onload = function () {
//     console.log("The document was loaded");
// }

//Events in javascript
// firstContainer.addEventListener('click', function () {
//     console.log("clicked on container")
// })
// firstContainer.addEventListener('click', function () {
//     console.log("Clicked")
// })
// firstContainer.addEventListener('mouseover', function () {
//     console.log("Mouse on container")
// })
// firstContainer.addEventListener('mouseout', function () {
//     console.log("Mouse out of container")
// })

//Arrow Functions

// summ = (a, b) => {
//     return a + b;
// }
// logKaro = () => {
//     console.log("I am your log");
// }
// setTimeout(logKaro, 2000);
// clr = setInterval(logKaro, 2000);

//JavaScript Local Storage
// localStorage.setItem('name','manvi');
// localStorage.getItem('name');

//JSON
// obj = { name: "manvi", length: 1, a: { this: 'that' } }
// js = JSON.stringify(obj);
// console.log(js);
// parsed = JSON.parse(`{"name":"manvi","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

a = 34;
console.log(`this is my ${a}`);