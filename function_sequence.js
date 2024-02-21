///////////////////////
// FUNCTION SEQUENCE //
///////////////////////
/*
    Function Sequence : javascript functions yang dijalankan dalam urutan ketika mereka dipanggil. Bukan dalam urutan mereka di defenisikan.
*/
let result; 
function greet(str) {
    result = str
}
function hello() {
    greet("Hello")
}
function arigatou() {
    greet("Arigatou!")
}
hello()
// arigatou()
// console.log(result);