var num = document.getElementById("data");
const btnleft1 = document.getElementById("flechaizquierda1"); //Esta es una instancia de Boton izquierda 1
const btnright4 = document.getElementById("flechaderecha4");  //Esta es una instancia de Boton derecha 4
function add(n){
    var x = num.value;
    num.value = x + n;
}
function cancel(){
    num.value = "";
    document.getElementById("mensaje").innerHTML=""
}
function login(){
    var pass = document.getElementById("data").value;
    if(pass=="71071721"){
        document.getElementById("pantalla1").style.display="none";
        document.getElementById("pantalla2").style.display="block";
        document.getElementById("mensaje").innerHTML="¡Contraseña correcta!"
    }else{
        clearData();
        document.getElementById("mensaje").innerHTML="¡Contraseña incorrecta!"
    }
}
function clearData(){
    document.getElementById("data").value=""
}
function backMain(){
    document.getElementById("pantalla3").style.display="none";
    document.getElementById("pantalla2").style.display="block";
    btnleft1.setAttribute("onclick","retiroScreen()");
}
function retiroScreen(){
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla3").style.display="block";
    btnleft1.setAttribute("onclick","solesScreen()");        //Funcion que modifica el atributo del elemento instanciado par1(nombre) par2(valor del atributo)
}
function solesScreen(){
    document.getElementById("pantalla3").style.display="none";
    document.getElementById("pantalla4").style.display="block";
    btnleft1.setAttribute("onclick","20Screen()");
    btnright4.setAttribute("onclick","backRetiroScreen()");
}
function backRetiroScreen(){
    document.getElementById("pantalla4").style.display="none";
    document.getElementById("pantalla3").style.display="block";
    btnleft1.setAttribute("onclick","solesScreen()");
    btnright4.setAttribute("onclick","backMain()");
}