var num = document.getElementById("data");
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