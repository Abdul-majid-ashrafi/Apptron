// var h1 = document.getElementById("heading");
// h1.innerHTML = "Hello";
// h1.style.color = "red";
// h1.style.background = "black";
// console.log(h1)




// // ==================================================
// var headings = document.getElementsByTagName("H1")
// // console.log(headings)
// for (let i = 0; i < headings.length; i++) {
//     const h1 = headings[i];
//     h1.innerHTML = "Heading " + i
//     // h1.style.color = "red"
//     h1.setAttribute("class", "cssStyle")
// }
// // ==================================================


// var input = document.getElementById("input");
// function call(params) {
//     input.value = "Hello"
//     console.log(input.value)
// }







var heading = document.createElement("H1");
var text = document.createTextNode("Hello World");
heading.appendChild(text);
document.body.appendChild(heading)
console.log(heading)











