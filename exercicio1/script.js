const number = Number(prompt("digite um numero"))

// letra A 
if (number % 2 === 0) {
    if (number % 3 === 0) {
        console.log(`O número ${number} é divisivel por 2 E 3`);
    }
    else {
        console.log(`O número ${number} só é divisivel por 2`);
    }
}
else {
    if (number % 3 === 0) {
        console.log(`O número ${number} só é divisivel por 3`);
    } else{
        console.log(`O número ${number} não é divisivel por 2 ou 3`)
    }
}



// daria para usar else if tb
// if (number % 2 === 0) {
//     if (number % 3 === 0) {
//         console.log(`O número ${number} é divisivel por 2 E 3`);
//     }
//     else {
//         console.log(`O número ${number} só é divisivel por 2`);
//     }
// }
// else if (number % 3 === 0) {
//     console.log(`O número ${number} só é divisivel por 3`);
// } 
// else {
//     console.log(`O número ${number} não é divisivel por 2 ou 3`)
// }






// if(number % 2 === 0 && number % 3 === 0){
//     console.log(`O número ${number} é divisivel por 2 E 3`);
// }else{
//     console.log(`O Numero ${number} não é divisível por 2 e 3`);
// }






// letra B 

if(number % 2 === 0 && number % 3 === 0){
    console.log(`O número ${number} é divisivel por 2 E 3`);
}

if(number % 2 === 0 || number % 3 === 0){
    console.log(`O número ${number} é divisivel por 2 OU 3`);
}























