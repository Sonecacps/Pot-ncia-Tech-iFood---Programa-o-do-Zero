/*Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)*/
class personagem{
    constructor(nome,idade,tipo,atk){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.atk = atk;
    }    

    atacar(){
        let atacar;
    
        switch (this.tipo){
            case "Mago":
                atacar = "magia"
                break;
            case "Guerreiro":
                atacar = "espada"
                break;
            case "Ninja":
                atacar = "shuriken"
                break;
            case "Monge":
                atacar = "marciais"
                break;  
        } 
     console.log(`O ${this.tipo} ${this.nome} atacou usando ${atacar}`);  
    }
 }  

//Instancia
const mago = new personagem("Patolino",170,"Mago","magia")
const guerreiro = new personagem("Thanos",20,"Guerreiro","espada")
const monge = new personagem("Ippo",56,"Monge","artes marciais")
const ninja = new personagem("Naruto",30,"Ninja","shuriken")
/*
Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada 
  */

 mago.atacar();
 guerreiro.atacar();
 ninja.atacar();
 monge.atacar();