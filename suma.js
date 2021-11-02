
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
    var vida = Number(document.getElementById("vida").value);
     
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
    }


    else{

       if (vida <= 5 && vida >1){
            vida = vida - 1;
            document.getElementById("bienmal").value="x";
            document.getElementById("vida").value=vida;
            bienmal.style.color = "red"; 
    
        
    
        }
    
        else{
            document.getElementById("res").value="";
            document.getElementById("pt").value="0";
            document.getElementById("vida").value="5";
            document.getElementById("bienmal").value="";
            
    
    
    
        }

    }
    
    
        
    

  

    }




