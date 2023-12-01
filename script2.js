
function partidas (a, b){
let partidas = a - b;
return partidas;
};

let ganhos = partidas (215, 40);

if(ganhos <= 10){
    rank = "Ferro"
}else if(ganhos >= 11 && ganhos <= 20){
    rank = "Bronze"
}else if(ganhos >= 21 && ganhos <= 50){
    rank =  "Prata"
}else if(ganhos >= 51 && ganhos <= 80){
    rank = "Ouro"
}else if(ganhos >= 81 && ganhos <= 90){
    rank =  "Diamante"
}else if(ganhos >= 91 && ganhos <= 100){
    rank = "Lendario"
}else if(ganhos >= 101){
    rank = "Imortal"  
}else{
    rank = "Você não tem ranking ainda"
    
}

console.log("O herói tem um saldo de " + ganhos + " está no nivel de " + rank);
