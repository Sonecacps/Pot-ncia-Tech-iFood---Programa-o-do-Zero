var nick = "Soneca";
let exp = 3000;

let resul = "";

if(exp <= 1000){
    resul = ("Ferro")
}else if (exp >=1001 && exp <= 2000){
    resul = ("Bronze")
}else if (exp >=2001 && exp <= 3000){
    resul = ("Prata")
}else if(exp >=3001 && exp <= 4000){
    resul = ("Ouro")
}else if(exp >=4001 && exp <= 5000){
    resul = ("Platina")
}else if(exp >=5001 && exp <= 6000){
    resul = ("Diamante")
}else if(exp >=6001 && exp <= 8000){
    resul = ("Ascendente")
}else if(exp >=8001 && exp <= 10000){
    resul = ("Imortal")
}else if(exp >=10001){
    resul = ("Radiante")
}

console.log("O Herói de nome " +  nick + " está no nível de "+ resul+"!")