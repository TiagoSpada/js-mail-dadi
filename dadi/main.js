'use stric';
const dadoUser = Math.floor(Math.random() * 6)+1;
const dadoPc = Math.floor(Math.random() * 6)+1;

console.log(`Il numero dell'utente è ${dadoUser}`);
console.log(`Il numero del computer è ${dadoPc}`);

if(dadoPc === dadoUser){
    console.log("I numeri sono uguali, è pareggio!!");
}else if (dadoPc > dadoUser){
    console.log("Ha vinto il computer");
}else {
    console.log("Ha vinto l'utente");
}