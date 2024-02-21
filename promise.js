const tryPromise = new Promise((resolve, reject) => {
  console.log("loading ...");
  setTimeout(() => {
    const success = false;
    if (success) {
      resolve("success gak tuh ?");
    } else {
      reject("error nih");
    }
  }, 2000);
});

tryPromise
.then((res) => {
    console.log("Res => ", res);
})
.catch((err) => {
    console.log("Err => ", err);
})
.finally(() => {
    console.log("Finally Done!!");
})