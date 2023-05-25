

console.log("=========aula=============");
const idade = 10
if (idade >= 13) {
    if (idade <= 17) {
        console.log("A pessoa pode ter o cartão")
    } else {
        console.log("Consulte outras possibilidades")
    }
} else {
    console.log("Consulte outras possibilidades")
}

//com operador lógico
console.log("com operador lógico");

if (idade >= 13 && idade <= 17) {
    console.log("A pessoa pode ter o cartão")
} else {
    console.log("Consulte outras possibilidades")
}

const eUsuario = confirm("Já possui conta?")
// if(eUsuario){
//     console.log("Boas vindas");
// } else{
//     console.log("faça o cadastro");
// }

eUsuario ? console.log("Boas vindas") : console.log("faça o cadastro");

const escolha = prompt("Escolha entre 1 e 4 para adquirir seu cartão")
switch (escolha) {
    case "1":
        console.log("Facil");
        break;
    case "2":
        console.log("Black");
        break;
    case "3":
        console.log("Platinum");
        break;
    case "4":
        console.log("Master Gold");
        break;
    default:
        console.log("Escolha umas das quatro opções disponíveis");
        break;
}


const number = Number(prompt("escolha um numero"))
// if (number % 2 === 0) {
//     if (number % 3 === 0) {
//         console.log("numero divisivel por 2 e 3");
//     } else {
//         console.log("numero não é divisil pelo 2 e pelo 3 ao mesmo tempo")
//     }
// } else {
//     console.log("numero não é divisivel pelo 2 e pelo 3 ao mesmo tempo");
// }

if(number % 2 === 0 && number % 3 === 0){
    // number ===30?console.log("UFA, ACERTEI"):console.log("NÂO FOI")
    switch (number) {
        case 6:
            console.log("6");
            break;
        case 12:
            console.log("12");
            break;
        case 18:
            console.log("18");
            break;
        case 24:
            console.log("24");
            break;
        case 30:
            console.log("30");
            break;
        default:
            console.log("O numero é maior que 30 ou menor que 6");
            break;
    }
    console.log("numero divisivel por 2 e 3")
}else {
    console.log("numero não é divisivel pelo 2 e pelo 3 ao mesmo tempo");
}