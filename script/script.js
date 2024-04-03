function abrir(num){
    for(let i = 1; i <= 5; i++){
        let id_aba = "aba"+i;
        let id_ab = "a"+i;
        document.getElementById(id_aba).disabled = false;
        document.getElementById(id_ab).style.display = "none";
        
    }
    
    if(num== "1"){
        document.getElementById("aba1").disabled = true;
        document.getElementById("a1").style.display = "block";
    }

    if(num== "2"){
        document.getElementById("aba2").disabled = true;
        document.getElementById("a2").style.display = "block";
    }

    if(num== "3"){
        document.getElementById("aba3").disabled = true;
        document.getElementById("a3").style.display = "block";
    }

    if(num== "4"){
        document.getElementById("aba4").disabled = true;
        document.getElementById("a4").style.display = "block";
    }

    if(num== "5"){
        document.getElementById("aba5").disabled = true;
        document.getElementById("a5").style.display = "block";
    }

     
}

function hora_atual(){
    let data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    if(s<10){
        s = "0" + s;
    }
    if(m<10){
        m = "0" + m;
    }
    if(h<10){
        h = "0" + h;
    }
    document.getElementById("h").innerHTML = h + ":" + m + ":" + s;
    } 

setInterval(() => {
    hora_atual();
}, 1000);
function contador(){
    let inicio = document.getElementById("inicio").value;
    let fim = document.getElementById("fim").value;
    if(inico == fim){
      contar.clearinterval();

        inicio++;
        document.getElementById("valor").innerHTML = inicio;    }
}


let contar = null;
let inico = 0; 
let fim = 0;
function iniciarContagem(){
    let inicio = document.getElementById("inicio").value;
    let fim = document.getElementById("fim").value;
    contar = setInterval(() => {
        contador();
    }, 1000);
}
