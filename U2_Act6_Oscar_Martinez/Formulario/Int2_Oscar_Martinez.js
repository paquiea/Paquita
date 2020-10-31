
//1OnLoad
function PaginaCargada() { 
    alert("Se cargo la Imagen")
}

//2OnMouseUp
function Abajo() {  
    document.getElementById("preg1").style.textAlign = "right";
  }
  
//3OnMouseDown 
function Arriba() {
    document.getElementById("preg1").style.textAlign = "left";
  }

//4OnMouseOver
function cambiarcolor2(){  
    document.getElementById("Enviar").style.backgroundColor="black";
    document.getElementById("Enviar").style.color="white";}

//5OnMouseOut
function cambiarcolor(){  
    document.getElementById("Enviar").style.backgroundColor="white";
    document.getElementById("Enviar").style.color="black";}

//6OnDblClick
function doble(){
    document.getElementById("doble").innerHTML = "Datos";
}

//7OnClick
function dioda(){
    document.getElementById("dioda").innerHTML = "¡KONO DIO DA!"
}

//8OnSelect
function copea(){
    alert("Copear y pegar es malo")
}

//9OnSubmit
function enviar(){
    alert("tus datos fueron enviados para hacer una revision")
}

//10OnFocus
function foco(x){
    x.style.backgroundColor = "yellow"
}



//Validar
function Validar(){
    var nombre,AP,AM,Edad,Telefono, expresion;
    nombre= document.getElementById("nombre").value;
    AP= document.getElementById("AP").value;
    AM= document.getElementById("AM").value;
    Edad= document.getElementById("Edad").value;
    Telefono= document.getElementById("Telefono").value;

    if( isNaN(Telefono)){
        alert("debe de ser solamente numeros")
        return false;
        
    }

}