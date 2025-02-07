const name = "apollo_zero"
let XpDoPlayer = (4000)
let Nivel = ""

const niveis = [
    { limite: 1000, nivel: "Ferro" },
    { limite: 2000, nivel: "Bronze" },
    { limite: 5000, nivel: "Prata" },
    { limite: 7000, nivel: "Ouro" },
    { limite: 8000, nivel: "Platina" },
    { limite: 9000, nivel: "Ascendente" },
    { limite: 10000, nivel: "Imortal" },
    { limite: Infinity, nivel: "Radiante" }
];

for (let i = 0; i <niveis.length; i++){
    if (XpDoPlayer <= niveis[i].limite){
        Nivel = niveis[i].nivel
        break;
    }
}

console.log ("O héroi " + name + " Está no nivel " + Nivel)






