function calculo (){
    var a=parseInt(document.getElementById ("n1").value);
    var b=parseInt(document.getElementById ("n2").value);
    var op=document.getElementById("operar").value;
    var resultado;
    if(op=="sumar") {
        resultado=a+b;
    }
    if (op=="restar") { 
        resultado=a-b;
    }
    if (op=="multiplicar") {
        resultado=a*b;
    }
    if (op=="dividir") {
        resultado=a/b;
    }
    document.getElementById("resultado2").textContent="el resultado es:"+resultado;
}
function validar () {
    var usuario=document.getElementById("usuario").value;
    var clave=document.getElementById("clave").value;

    if (usuario=="ari" && clave=="1234") {
        window.location.href="index2.html";
    }else{
        alert("USUARIO INVALIDO")
    }
}
function limpiar(){

    document.getElementById("usuario").value="";
    document.getElementById("clave").value="";

}
function afiliar (){
    var ema=document.getElementById("email").value;


    document.getElementById("nombre").value="";
    document.getElementById("DNI").value="";
    document.getElementById("edad").value="";
    document.getElementById("email").value="";
    document.getElementById("resultado3").textContent="usuario afiliado";

    if(ema=="arihuedk@gmail.com") {
        document.getElementById("resultado3").textContent="usuario existente";
    }else{
        document.getElementById("resultado3").textContent="usuario no afiliado";
    }
    }
    function buscar () {
        var mar=document.getElementById("marca").value;
        var ti=document.getElementById("tipo").value;
        if (mar=="1" && ti=="1") {
            document.getElementById("resultado4").textContent="15k usd";        }
            if (mar=="1" && ti=="2") {
            document.getElementById("resultado4").textContent="30k usd";   }
        if (mar=="1" && ti=="3") {
            document.getElementById("resultado4").textContent="25k usd";  }
        if (mar=="1" && ti=="4") {
            document.getElementById("resultado4").textContent="18k usd";   }
        
    }