
let nomeDoHeroi = "Pedro"

let nivelDoHeroi = 2001;

let rankDoHeroi = "Ferro";

if(nivelDoHeroi >= 1000){
rankDoHeroi=("Ferro")
}
if(nivelDoHeroi >= 1001 && nivelDoHeroi < 2000){
rankDoHeroi=("Bronze")
}
if(nivelDoHeroi >= 2001 && nivelDoHeroi < 5000){
rankDoHeroi=("Prata")
}
if(nivelDoHeroi >= 5001 && nivelDoHeroi < 7000){
rankDoHeroi=("Ouro")
}
if(nivelDoHeroi >= 7001 && nivelDoHeroi < 8000){
rankDoHeroi=("Platina")
}
if(nivelDoHeroi >= 8001 && nivelDoHeroi < 9000){
rankDoHeroi=("Ascendente")
}
if(nivelDoHeroi >= 9001 && nivelDoHeroi < 10000){
rankDoHeroi=("Imortal")
}
if(nivelDoHeroi >= 10001){
rankDoHeroi=("Radiante")
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + " com o ranking " + rankDoHeroi + ".")
