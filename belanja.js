const priceList = [
    {name: "RTX 3060", price: 6000000}, 
    {name: "Rode Mic 1500", price: 1500000}, 
    {name: "Mouse Logitech", price: 500000}
]

let money = 10000000

// Menggunakan CallBack 
// function shopping(money, productPrice, callback) {
//     let change = money - productPrice.price
//     console.log("Money : ", money);
//     console.log("Product Price : ", productPrice.price);
//     callback(change)
// }

// shopping(money, priceList[0], (change) => {
//     console.log("Money Left : ", change);
//     console.log("=============================");
//     shopping(change, priceList[1], (change) => {
//         console.log("Money Left : ", change);
//         console.log("=============================");
//         shopping(change, priceList[2], (change) => {
//             console.log("Money Left : ", change);
//             console.log("=============================");
//         })
//     })
// })

// Menggunakan Promise
// function shopping2(money, product) {
//     return new Promise((resolve, reject) => {
//         let change = money - product.price
//         console.log("Money : ", money);
//         console.log("Product : ", product.price);
//         resolve(change)
//     })
// }

// shopping2(money, priceList[0])
// .then((change) => {
//     console.log("Money Left : ", change);
//     console.log("=============================");
//     return shopping2(change, priceList[1])
// })
// .then((change) => {
//     console.log("Money Left : ", change);
//     console.log("=============================");
//     return shopping2(change, priceList[2])
// })
// .then((change) => {
//     console.log("Money Left : ", change);
//     console.log("=============================");
// })
