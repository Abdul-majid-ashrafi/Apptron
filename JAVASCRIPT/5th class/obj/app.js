// var user = {
//     userName: "majid01",
//     age: 27,
//     number: 343324324,
//     email: "majidashrafkhan2@gmail.com",
//     gender: "male"
// };
// user.address = "karachi";
// user.address = "khi";
// console.log(user.email)
// delete user.email;
// console.log(user)


// =========================================================
// var users = [
//     {
//         userName: "majid01",
//         age: 27,
//         number: 343324324,
//         email: "majidashrafkhan2@gmail.com",
//         gender: "male"
//     },
//     {
//         userName: "Abc",
//         age: 23,
//         number: 343324324,
//         email: "abc@gmail.com",
//         gender: "female"
//     },
//     {
//         userName: "Kirshan lal",
//         age: 22,
//         number: 343324324,
//         email: "Kirshan@gmail.com",
//         gender: "male",
//     },
//     {
//         userName: "Raja",
//         age: 19,
//         number: 343324324,
//         email: "raja@gmail.com",
//         gender: "male",
//         likePages: {
//             name1: "A",
//             name2: "D",
//         }
//     }
// ];


// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     // delete user.number
//     if (user.age > 22 && user.gender == "male") {
//         console.log(user)
//     }
// }
// =========================================================








// =========================================================
// var users = [
//     {
//         userName: "majid01",
//         age: 27,
//         number: 343324324,
//         email: "majidashrafkhan2@gmail.com",
//         gender: "male"
//     },
//     {
//         userName: "Abc",
//         age: 23,
//         number: 343324324,
//         email: "abc@gmail.com",
//         gender: "female"
//     },
//     {
//         userName: "Kirshan lal",
//         age: 22,
//         number: 343324324,
//         email: "Kirshan@gmail.com",
//         gender: "male",
//         func: false
//     },
//     {
//         userName: "Raja",
//         age: 19,
//         number: 343324324,
//         email: "raja@gmail.com",
//         gender: "male",
//         likePages: {
//             name1: "A",
//             name2: "D",
//         },
//         func: true,
//         anonymousFunc: (ind) => {
//             delete users[ind].likePages
//             delete users[ind].abc;
//             return users[ind]
//         }
//     }
// ];

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     // delete user.number
//     if (user.func == true) {
//         // console.log(user.abc())
//         console.log(user.anonymousFunc(i))
//     }
// }
// ======================================================






// ======================================================
var functionsWithObject = {
    // functionsWithObject.callMyName()
    callMyName: () => {
        document.write("<h1>Majid Ashraf</h1>");
    },
    //functionsWithObject.renderAddress()
    renderAddress: function func() {
        document.write("<h1>Pakistan Karachi</h1>");
    },
    //functionsWithObject.multiply()
    multiply: max()
}

function max() {
    document.write(5 * 5);
}
