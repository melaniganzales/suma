

 Obtener ();
function Obtener (){

    if (localStorage.getItem("contar") ){
        let guardar = localStorage.getItem("contar") 
        document.getElementById("num").value=guardar;

    } else{
        console.log("No hay entrada")
        
    } 
}


function Contar(){
    var num = Number(document.getElementById("num").value);
    num = num + 1;
    document.getElementById("num").value=num;
    localStorage.setItem("contar",num);
    

}

function Disminuir(){
    var num = Number(document.getElementById("num").value);

    if (num > 0){
        var num = num - 1;
        document.getElementById("num").value=num;
        localStorage.setItem("contar",num);

    }
    
    
}

function Resetear(){
    var num = Number(document.getElementById("num").value);
    num = 0;
    document.getElementById("num").value=num;
    localStorage.setItem("contar",num);
    

}

