let randomnum=0
let randomnum2=0
let count=[0,0,0,0,0,0,0,0,0,0,0,0,0]
let somaDados=0
let secao=document.getElementById("secao")
function Dados(){

    for(let i=0;i<=1000;i++){
    randomnum=Math.floor(Math.random() *6+1) 
    randomnum2=Math.floor(Math.random() *6+1)
    somaDados=randomnum + randomnum2
    count[somaDados]=count[somaDados]+1
   
}
    return count
}
Dados()
function paragrafo(num){
    let parag= document.createElement("p")
    parag.innerText=num
    secao.appendChild(parag)
}
function lancamento(array){
    for(let i=2;i<array.length;i++){
        paragrafo(i + ": "+array[i])
    }

}
lancamento(count)
function otherparag(n){
    let p=document.createElement("p")
    p.innerText=n
    secao2.appendChild(p)
    p.style.width=`${n+40}px`
    p.style.backgroundColor="darkred"
    p.style.color="white"
}
function graficlanc(array2){
    for (let i = 2; i < array2.length; i++) {
        otherparag(array2[i])
        
    }
}
graficlanc(count)

