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
