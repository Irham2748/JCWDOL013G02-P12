//////////////////////
// SEQUENCE CONTROL //
//////////////////////
// Cara 1 :
function calculator(a, b) {
    return a + b
}
function displayer(something) {
    console.log(something);
}
let result1 = calculator(5, 5)
// displayer(result1)

// Cara 2 :
function calculator1(a, b) {
    let result = a + b 
    displayer1(result)
}
function displayer1(something) {
    console.log(something);
}
// calculator1(5, 5)