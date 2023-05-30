//códigos a serem reescritos
const nome = "José"
const idade = 20
// a)
if (nome === "José") {
	console.log("Oi, Zé!")
} else {
	console.log("Olá, " + nome)
}


nome === "José" ? console.log("Oi, Zé!") : console.log("Olá, " + nome)

// encadeando duas validações no ternário
// nome === "José" ? 
// idade === 2 ? 
// console.log("Oi, Zé, vc tem 2 anos") :
// console.log("algo não é verdade") :
// console.log("Olá, " + nome)




// b)
if (idade >= 18) {
	console.log("Pode tirar carteira de motorista!")
} else {
	console.log("Ainda não pode tirar carteira de motorista!")
}

idade >= 18 ?
	console.log("Pode tirar carteira de motorista!") :
	console.log("Ainda não pode tirar carteira de motorista!")



console.log("Em função");

function verificaJose(nome) {
	nome === "José" ? console.log("Oi, Zé!") : console.log("Olá, " + nome)
}

verificaJose(nome)

function verificaIdade(idade) {
	idade >= 18 ?
		console.log("Pode tirar carteira de motorista!") :
		console.log("Ainda não pode tirar carteira de motorista!")
}

verificaIdade(idade)