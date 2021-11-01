var vida = 5;
num1 = Math.random()*16
num1 = Math.floor(num1)
num2 = Math.random()*16
num2 = Math.floor(num2)

document.getElementById("num1").value=num1;
document.getElementById("num2").value=num2;

function Aleatorio(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    num1 = Math.random()*16
    num1 = Math.floor(num1)
    num2 = Math.random()*16
    num2 = Math.floor(num2)

    document.getElementById("num1").value=num1;
    document.getElementById("num2").value=num2;
}

function Sumar(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var res = Number(document.getElementById("res").value);
    var pt = Number(document.getElementById("pt").value);
   

    
    var sumar = num1 + num2;
    
    
    if (sumar == res){
        pt = pt + 2
        document.getElementById("bienmal").value="✔";
        bienmal.style.color = "green";
        document.getElementById("res").value="";
        num1 = Math.random()*16
        num1 = Math.floor(num1)
        num2 = Math.random()*16
        num2 = Math.floor(num2)

    document.getElementById("num1").value=num1;
    document.getElementById("num2").value=num2;
    document.getElementById("pt").value=pt;
    
    
        
    } else{
        
        document.getElementById("bienmal").value="x";
        document.getElementById("res").value="";
        bienmal.style.color = "red"; 
        vida = vida - 1;


        }

    if (vida == 4){
        document.getElementById("vida").value="♥ ♥ ♥ ♥ ";
    }
    if (vida == 3){
        document.getElementById("vida").value="♥ ♥ ♥  ";
    }
    if (vida == 2){
        document.getElementById("vida").value="♥ ♥  ";
    }
    if (vida == 1){
        document.getElementById("vida").value="♥  ";

    }
       
    if (vida == 0){
        document.getElementById("vida").value="♥ ♥ ♥ ♥ ♥";
        document.getElementById("pt").value="0";
        document.getElementById("bienmal").value="";
   
        
    }


    }



