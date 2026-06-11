//Comentário de uma linha 

/*
comentário de múltiplas linhas é possível ter várias linhas
*/



//COMANDO DE SAÍDA 
console.log("JG O GAROTINHO")

//DECLARAÇÃO DE VARIÁVEL
let num = 10
var num2 = 50 
let num3 = 100

console.log(num)
console.log(num2)
console.log(num3)

if (true){
       let num4 = 250
       console.log(num4)
var num5 = 145

}
console.log(num5)

num = 1882
console.log(num)

num2=58
console.log(num2)

num3 = 100
console.log(num3)

//CONCATENAÇÃO

console.log('valor da variável num3 é: ' + num3)
console.log("valor da variável num3 é: " + num3)
console.log("valor da variável num3 é: ", num3)

//CONCATENAÇÃO TEMPLATE: acento grave, cifrão e chaves

console.log(`valor da variável num3 é ${num3}`)

//OPERADORES MATEMÁTICOS
/*
   + soma 
   - subtração 
   * multiplicação 
   / divisão 
   % módulo - resto da divisão
*/
console.log('A soma dos números é: ', 12+8)
console.log('A subtração entre as variáveis é:', num3-num2)
console.log('A multiplucação dos números é: ', num2*5)
console.log('A divisão etres os valores é de: ', num3/5)
console.log(`O resto da divisão entre 10 e 2 é: ${10 % 2}`)

//OPERADORES RELACIONACIONAIS  OU COMPARAÇÃO
/*

   > MAIOR
   < MENOR
   >= MAIOR OU IGUAL
   <= MENOR OU IGUAL
   != DIFERENTE
*/

//OPERADORES LÓGICOS
/*

   && E
   || OU 
*/ 

//TESTE LÓGICO 
let idade = 40

if(idade >= 18) {
    console.log("maior de idade")
}else{
    console.log("menor de idade")
}

idade >= 18 ? console.log("maior de idade"): console.log ("menor de idade")

/**
 Renovação de CNH 
   18 até 49 -> 10 anos
   50 até 69 -> 5 anos 
   70 acima -> 3 anos
 */

//ANINHAMENTO DE IF 
if(idade < 18){
     console.log(` COM ${idade}, NÃO É PERMITIDO POSSUIR CNH `)
}else if (idade<50){
    console.log(`COM ${idade}, O TEMPO PARA RENOVAÇÃO É DE 10 ANOS `)
}else if (idade<70){
    console.log(`COM ${idade}, O TEMPO PARA RENOVAÇÃO É DE 3 ANOS`)
}