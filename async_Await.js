/////////////////
// ASYNC AWAIT //
/////////////////
// Real Case Implementation with Async Await
const fetchData = async() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Always Running !!");
    })
}
// fetchData()

// Example Without Async Await
const tryPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isError = false
        if(isError) reject("Error")
        else resolve("Success")
    }, 2000)
})

const asyncAwait = () => {
    console.log("Satu");
    tryPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("Finally Done!!!"))
    console.log("Dua");
}
// asyncAwait()

// Real Case Implementation with Async Await
const fetchData1 = async() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Always Running !!");
    })
}
fetchData1()

// // Example Without Async Await
// const tryPromise1 = new Promise((resolve, reject) => {
//     let isError1 = false
//     if(isError1) reject("Error")
//     else resolve("Success")
// })

// const asyncAwait2 = () => {
//     console.log("Satu");
//     tryPromise1
//     .then((res1) => console.log(res1))
//     .then((err1) => console.log(err1))
//     .finally(() => console.log("Finally Done!!!"))
//     console.log("Dua");
// }
// asyncAwait2()

// // Example With Async Await
// const tryPromise2 = new Promise((resolve, reject) => {
//     let isError = false 
//     if(isError) reject("Error")
//     else resolve("Success")
// })

// const asyncAwait1 = async() => {
//     console.log("Satu");
//     await tryPromise2
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("Finally Done!!!"))
//     console.log("Dua");
// }
// // asyncAwait1()

// // Real Case Implementation with Async Await
// const fetchData1 = async() => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const users = await response.json()
//         console.log(users);
//     } catch(error) {
//         console.log(error);
//     }
// }
// // fetchData1()