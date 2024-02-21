//////////////
// CALLBACK //
//////////////
/*
    Callback : Sebuah fungsi yang diteruskan sebagai sebuah argument untuk fungsi yang lain. Teknik ini mengizinkan sebuah fungsi untuk memanggil fungsi yang lain. Callback function dapat berjalan setelah function yang lain telah selesai.
*/
function calculator2(a, b, callback) {
    callback(a + b)
}
function displayer2(something) {
    console.log(something);
}
calculator2(5, 5, displayer2)