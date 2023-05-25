let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!")
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!")
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!")
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!")
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!")
// } else{
//     console.log("nacionalidade não encontrada")
// }


switch (nacionalidade) {
    case "brasileira":
        console.log("a pessoa é do Brasil!")
        break
    case "argentina":
        console.log("a pessoa é do argentina!")
        break
    case "uruguaia":
        console.log("a pessoa é do Uruguai!")
        break
    case "chilena":
        console.log("a pessoa é do chilena!")
        break
    case "colombiana":
        console.log("a pessoa é do colombiana!")
        break
    default:
        console.log("nacionalidade não encontrada")
}





console.log("em função");
//sem o break
function verificaNacionalidade() {
    switch (nacionalidade) {
        case "brasileira":
            return console.log("a pessoa é do Brasil!")

        case "argentina":
            return console.log("a pessoa é do argentina!")

        case "uruguaia":
            return console.log("a pessoa é do Uruguai!")

        case "chilena":
            return console.log("a pessoa é do chilena!")

        case "colombiana":
            return console.log("a pessoa é do colombiana!")

        default:
            console.log("nacionalidade não encontrada")
    }
}

verificaNacionalidade(nacionalidade)



function verificaNacionalidadeTESTE() {
    switch (nacionalidade) {
        case "brasileira":
            console.log("a pessoa é do Brasil!")
            break
        case "argentina":
            console.log("a pessoa é do argentina!")
            break
        case "uruguaia":
            console.log("a pessoa é do Uruguai!")
            break
        case "chilena":
            console.log("a pessoa é do chilena!")
            break
        case "colombiana":
            console.log("a pessoa é do colombiana!")
            break
        default:
            console.log("nacionalidade não encontrada")
    }
}

verificaNacionalidadeTESTE(nacionalidade)