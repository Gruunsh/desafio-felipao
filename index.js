/*
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

console.log("------Nível de Héroi------")

let heroes = [["Jesus", 99999], ["Player1", 10], ["Player2", 1500], ["Player3", 4010], 
["Player4", 7000], ["Player5", 7560], ["Player6", 8600], ["Player7", 9001]]
let count = 0

while (count < heroes.length) {
    if (heroes[count][1] <= 1000) {
        console.log("O héroi " + heroes[count][0] + " está no nível de Ferro! Com " + heroes[count][1] + " pontos de XP.")
    } else if (1001 <= heroes[count][1] && heroes[count][1] <= 2000) {
        console.log("O héroi " + heroes[count][0] + " está no nível de Bronze! Com " + heroes[count][1] + " pontos de XP.")
    } else if (2001 <= heroes[count][1] && heroes[count][1] <= 5000) {
        console.log("O héroi " + heroes[count][0] + " está no nível de Prata! Com " + heroes[count][1] + " pontos de XP.")
    } else if (5001 <= heroes[count][1] && heroes[count][1] <= 7000) {
        console.log("O héroi " + heroes[count][0] + " está no nível de Ouro! Com " + heroes[count][1] + " pontos de XP.")
    } else if (7001 <= heroes[count][1] && heroes[count][1] <= 8000) {
        console.log("O héroi " + heroes[count][0] + " está no nível de Platina! Com " + heroes[count][1] + " pontos de XP.")
    } else if (8001 <= heroes[count][1] && heroes[count][1] <= 9000) {
        console.log("O héroi " + heroes[count][0] + " está no nível de Ascendente! Com " + heroes[count][1] + " pontos de XP.")
    } else if (9001 <= heroes[count][1] && heroes[count][1] <= 10000) {
        console.log("O héroi " + heroes[count][0] + " está no nível de Imortal! Com " + heroes[count][1] + " pontos de XP.")
    } else if (heroes[count][1] >= 10001) {
        console.log("O héroi " + heroes[count][0] + " está no nível de Radiante! Com " + heroes[count][1] + "... pontos de XP.")
    }
    count += 1
}
