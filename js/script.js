var num = document.getElementById("data");
var mont = document.getElementById("monto");
var inicial;
var cash;
const btnleft1 = document.getElementById("flechaizquierda1"); //Esta es una instancia de Boton izquierda 1
const btnleft2 = document.getElementById("flechaizquierda2"); //Esta es una instancia de Boton izquierda 2
const btnleft3 = document.getElementById("flechaizquierda3"); //Esta es una instancia de Boton izquierda 3
const btnleft4 = document.getElementById("flechaizquierda4"); //Esta es una instancia de Boton izquierda 4
const btnright1 = document.getElementById("flechaderecha1"); //Esta es una instancia de Boton derecha 1
const btnright2 = document.getElementById("flechaderecha2"); //Esta es una instancia de Boton derecha 2
const btnright3 = document.getElementById("flechaderecha3"); //Esta es una instancia de Boton derecha 3
const btnright4 = document.getElementById("flechaderecha4"); //Esta es una instancia de Boton derecha 4
const btnm1 = document.getElementById("n1");
const btnm2 = document.getElementById("n2");
const btnm3 = document.getElementById("n3");
const btnm4 = document.getElementById("n4");
const btnm5 = document.getElementById("n5");
const btnm6 = document.getElementById("n6");
const btnm7 = document.getElementById("n7");
const btnm8 = document.getElementById("n8");
const btnm9 = document.getElementById("n9");
const btnm0 = document.getElementById("n0");
const btnmp = document.getElementById("np");
function add(n){
    var x = num.value;
    num.value = x + n;
}
function plus(n){
    var x = mont.value;
    mont.value = x + n;
}
function cancel(){
    num.value = "";
    document.getElementById("mensaje").innerHTML="";
}
function login(){
    var pass = document.getElementById("data").value;
    if(pass=="71071721"){
        document.getElementById("pantalla1").style.display="none";
        document.getElementById("pantalla2").style.display="block";
        document.getElementById("mensaje").innerHTML="¡Contraseña correcta!";
        cash = 50000;
        inicial = cash;
        //alert(cash);
    }else if (pass=="12345678") {
        document.getElementById("pantalla1").style.display="none";
        document.getElementById("pantalla2").style.display="block";
        document.getElementById("mensaje").innerHTML="¡Contraseña correcta!";
        cash = 13000;
        inicial = cash;
        //alert(cash);
    } else {
        clearData();
        document.getElementById("mensaje").innerHTML="¡Contraseña incorrecta!";
    }
}
function clearData(){
    document.getElementById("data").value="";
}
function retiroScreen(){
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla3.1").style.display="block";
    btnleft1.setAttribute("onclick","solesScreen()");       
    btnleft2.setAttribute("onclick","retiroScreen()");
    btnleft3.setAttribute("onclick","retiroScreen()");
    btnleft4.setAttribute("onclick","retiroScreen()");
    btnright1.setAttribute("onclick","dolarScreen()");
    btnright2.setAttribute("onclick","retiroScreen()");
    btnright3.setAttribute("onclick","retiroScreen()");
    btnright4.setAttribute("onclick","backMain()");
}
function consultaScreen(){
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla3.2").style.display="block";
    document.getElementById("inicial").innerHTML=inicial;
    document.getElementById("saldo").innerHTML=cash;
    btnleft1.setAttribute("onclick","consultaScreen()");       
    btnleft2.setAttribute("onclick","consultaScreen()");
    btnleft3.setAttribute("onclick","consultaScreen()");
    btnleft4.setAttribute("onclick","consultaScreen()");
    btnright1.setAttribute("onclick","consultaScreen()");
    btnright2.setAttribute("onclick","consultaScreen()");
    btnright3.setAttribute("onclick","consultaScreen()");
    btnright4.setAttribute("onclick","backMain2()");
}
function operacionesScreen(){
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla3.3").style.display="block";
    btnleft1.setAttribute("onclick","operacionesScreen()");       
    btnleft2.setAttribute("onclick","operacionesScreen()");
    btnleft3.setAttribute("onclick","operacionesScreen()");
    btnleft4.setAttribute("onclick","operacionesScreen()");
    btnright1.setAttribute("onclick","operacionesScreen()");
    btnright2.setAttribute("onclick","operacionesScreen()");
    btnright3.setAttribute("onclick","operacionesScreen()");
    btnright4.setAttribute("onclick","backMain3()");
}
function transferenciasScreen(){
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla3.4").style.display="block";
    btnleft1.setAttribute("onclick","transferenciasScreen()");       
    btnleft2.setAttribute("onclick","transferenciasScreen()");
    btnleft3.setAttribute("onclick","transferenciasScreen()");
    btnleft4.setAttribute("onclick","transferenciasScreen()");
    btnright1.setAttribute("onclick","transferenciasScreen()");
    btnright2.setAttribute("onclick","transferenciasScreen()");
    btnright3.setAttribute("onclick","transferenciasScreen()");
    btnright4.setAttribute("onclick","backMain4()");
}
function movimientosScreen(){
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla3.5").style.display="block";
    btnleft1.setAttribute("onclick","movimientosScreen()");       
    btnleft2.setAttribute("onclick","movimientosScreen()");
    btnleft3.setAttribute("onclick","movimientosScreen()");
    btnleft4.setAttribute("onclick","movimientosScreen()");
    btnright1.setAttribute("onclick","movimientosScreen()");
    btnright2.setAttribute("onclick","movimientosScreen()");
    btnright3.setAttribute("onclick","movimientosScreen()");
    btnright4.setAttribute("onclick","backMain5()");
}
function backMain(){
    document.getElementById("pantalla3.1").style.display="none";
    document.getElementById("pantalla2").style.display="block";
    btnleft1.setAttribute("onclick","retiroScreen()");       
    btnleft2.setAttribute("onclick","consultaScreen()");
    btnleft3.setAttribute("onclick","operacionesScreen()");
    btnleft4.setAttribute("onclick",);
    btnright1.setAttribute("onclick","transferenciasScreen()");
    btnright2.setAttribute("onclick","movimientosScreen()");
    btnright3.setAttribute("onclick",);
    btnright4.setAttribute("onclick",);
}
function backMain2(){
    document.getElementById("pantalla3.2").style.display="none";
    document.getElementById("pantalla2").style.display="block";
    btnleft1.setAttribute("onclick","retiroScreen()");       
    btnleft2.setAttribute("onclick","consultaScreen()");
    btnleft3.setAttribute("onclick","operacionesScreen()");
    btnleft4.setAttribute("onclick",);
    btnright1.setAttribute("onclick","transferenciasScreen()");
    btnright2.setAttribute("onclick","movimientosScreen()");
    btnright3.setAttribute("onclick",);
    btnright4.setAttribute("onclick",);
}
function backMain3(){
    document.getElementById("pantalla3.3").style.display="none";
    document.getElementById("pantalla2").style.display="block";
    btnleft1.setAttribute("onclick","retiroScreen()");       
    btnleft2.setAttribute("onclick","consultaScreen()");
    btnleft3.setAttribute("onclick","operacionesScreen()");
    btnleft4.setAttribute("onclick",);
    btnright1.setAttribute("onclick","transferenciasScreen()");
    btnright2.setAttribute("onclick","movimientosScreen()");
    btnright3.setAttribute("onclick",);
    btnright4.setAttribute("onclick",);
}
function backMain4(){
    document.getElementById("pantalla3.4").style.display="none";
    document.getElementById("pantalla2").style.display="block";
    btnleft1.setAttribute("onclick","retiroScreen()");       
    btnleft2.setAttribute("onclick","consultaScreen()");
    btnleft3.setAttribute("onclick","operacionesScreen()");
    btnleft4.setAttribute("onclick",);
    btnright1.setAttribute("onclick","transferenciasScreen()");
    btnright2.setAttribute("onclick","movimientosScreen()");
    btnright3.setAttribute("onclick",);
    btnright4.setAttribute("onclick",);
}
function backMain5(){
    document.getElementById("pantalla3.5").style.display="none";
    document.getElementById("pantalla2").style.display="block";
    btnleft1.setAttribute("onclick","retiroScreen()");       
    btnleft2.setAttribute("onclick","consultaScreen()");
    btnleft3.setAttribute("onclick","operacionesScreen()");
    btnleft4.setAttribute("onclick",);
    btnright1.setAttribute("onclick","transferenciasScreen()");
    btnright2.setAttribute("onclick","movimientosScreen()");
    btnright3.setAttribute("onclick",);
    btnright4.setAttribute("onclick",);
}
function solesScreen(){
    document.getElementById("pantalla3.1").style.display="none";
    document.getElementById("pantalla4").style.display="block";
    btnleft1.setAttribute("onclick","exactoScreen('20')");
    btnleft2.setAttribute("onclick","exactoScreen('150')");
    btnleft3.setAttribute("onclick","exactoScreen('300')");
    btnleft4.setAttribute("onclick","solesScreen()");
    btnright1.setAttribute("onclick","exactoScreen('100')");
    btnright2.setAttribute("onclick","exactoScreen('200')");
    btnright3.setAttribute("onclick","cantidadScreen()");
    btnright4.setAttribute("onclick","backRetiroScreen()");
}
function dolarScreen(){
    document.getElementById("pantalla3.1").style.display="none";
    document.getElementById("pantalla4.2").style.display="block";
    btnleft1.setAttribute("onclick","dolarScreen()");       
    btnleft2.setAttribute("onclick","dolarScreen()");
    btnleft3.setAttribute("onclick","dolarScreen()");
    btnleft4.setAttribute("onclick","dolarScreen()");
    btnright1.setAttribute("onclick","dolarScreen()");
    btnright2.setAttribute("onclick","dolarScreen()");
    btnright3.setAttribute("onclick","dolarScreen()");
    btnright4.setAttribute("onclick","backRetiroScreen2()");
}
function backRetiroScreen(){
    document.getElementById("pantalla4").style.display="none";
    document.getElementById("pantalla3.1").style.display="block";
    btnleft1.setAttribute("onclick","solesScreen()");       
    btnleft2.setAttribute("onclick","retiroScreen()");
    btnleft3.setAttribute("onclick","retiroScreen()");
    btnleft4.setAttribute("onclick","retiroScreen()");
    btnright1.setAttribute("onclick","dolarScreen()");
    btnright2.setAttribute("onclick","retiroScreen()");
    btnright3.setAttribute("onclick","retiroScreen()");
    btnright4.setAttribute("onclick","backMain()");
}
function backRetiroScreen2(){
    document.getElementById("pantalla4.2").style.display="none";
    document.getElementById("pantalla3.1").style.display="block";
    btnleft1.setAttribute("onclick","solesScreen()");       
    btnleft2.setAttribute("onclick","retiroScreen()");
    btnleft3.setAttribute("onclick","retiroScreen()");
    btnleft4.setAttribute("onclick","retiroScreen()");
    btnright1.setAttribute("onclick","dolarScreen()");
    btnright2.setAttribute("onclick","retiroScreen()");
    btnright3.setAttribute("onclick","retiroScreen()");
    btnright4.setAttribute("onclick","backMain()");
}
function exactoScreen(money){
    document.getElementById("pantalla4").style.display="none";
    document.getElementById("pantalla5").style.display="block";
    btnleft1.setAttribute("onclick","exactoScreen('0')");       
    btnleft2.setAttribute("onclick","exactoScreen('0')");
    btnleft3.setAttribute("onclick","exactoScreen('0')");
    btnleft4.setAttribute("onclick","exactoScreen('0')");
    btnright1.setAttribute("onclick","exactoScreen('0')");
    btnright2.setAttribute("onclick","exactoScreen('0')");
    btnright3.setAttribute("onclick","otheroperation()");
    btnright4.setAttribute("onclick","finalScreen()")
    cash = cash - money;
}
function exactoScreen2(money){
    monto.value="";
    if (money % 10 == 0) {
        document.getElementById("pantalla4.1").style.display="none";
        document.getElementById("pantalla5").style.display="block";
        btnleft1.setAttribute("onclick","exactoScreen('0')");       
        btnleft2.setAttribute("onclick","exactoScreen('0')");
        btnleft3.setAttribute("onclick","exactoScreen('0')");
        btnleft4.setAttribute("onclick","exactoScreen('0')");
        btnright1.setAttribute("onclick","exactoScreen('0')");
        btnright2.setAttribute("onclick","exactoScreen('0')");
        btnright3.setAttribute("onclick","otheroperation()");
        btnright4.setAttribute("onclick","finalScreen()")
        cash = cash - money;     
    } else {
        monto.setAttribute("type","text")
        monto.value = "No es multiplo de 10";
        setTimeout(function(){
            monto.setAttribute("type","contraseña");
        monto.value="";},3000);
    }
    
}
function backSolesScreen(){
    document.getElementById("pantalla4.1").style.display="none";
    document.getElementById("pantalla4").style.display="block";
    btnleft1.setAttribute("onclick","exactoScreen('20')");
    btnleft2.setAttribute("onclick","exactoScreen('150')");
    btnleft3.setAttribute("onclick","exactoScreen('300')");
    btnleft4.setAttribute("onclick","solesScreen()");
    btnright1.setAttribute("onclick","exactoScreen('100')");
    btnright2.setAttribute("onclick","exactoScreen('200')");
    btnright3.setAttribute("onclick","cantidadScreen()");
    btnright4.setAttribute("onclick","backRetiroScreen()");
}
function cantidadScreen(){
    monto.value="";
    document.getElementById("pantalla4").style.display="none";
    document.getElementById("pantalla4.1").style.display="block";
    btnm1.setAttribute("onclick","plus('1')");
    btnm2.setAttribute("onclick","plus('2')");
    btnm3.setAttribute("onclick","plus('3')");
    btnm4.setAttribute("onclick","plus('4')");
    btnm5.setAttribute("onclick","plus('5')");
    btnm6.setAttribute("onclick","plus('6')");
    btnm7.setAttribute("onclick","plus('7')");
    btnm8.setAttribute("onclick","plus('8')");
    btnm9.setAttribute("onclick","plus('9')");
    btnm0.setAttribute("onclick","plus('0')");
    btnmp.setAttribute("onclick","plus('.')");
    btnleft1.setAttribute("onclick","cantidadScreen()");
    btnleft2.setAttribute("onclick","cantidadScreen()");
    btnleft3.setAttribute("onclick","cantidadScreen()");
    btnleft4.setAttribute("onclick","cantidadScreen()");
    btnright1.setAttribute("onclick","cantidadScreen()");
    btnright2.setAttribute("onclick","exactoScreen2(document.getElementById('monto').value)");
    btnright3.setAttribute("onclick","cantidadScreen()");
    btnright4.setAttribute("onclick","backSolesScreen()");
}
function otheroperation(){
    document.getElementById("pantalla5").style.display="none";
    document.getElementById("pantalla2").style.display="block";
    btnleft1.setAttribute("onclick","retiroScreen()");       
    btnleft2.setAttribute("onclick","consultaScreen()");
    btnleft3.setAttribute("onclick","operacionesScreen()");
    btnleft4.setAttribute("onclick",);
    btnright1.setAttribute("onclick","transferenciasScreen()");
    btnright2.setAttribute("onclick","movimientosScreen()");
    btnright3.setAttribute("onclick",);
    btnright4.setAttribute("onclick",); 
}
function finalScreen(){
    document.getElementById("pantalla5").style.display="none";
    document.getElementById("pantalla6").style.display="block";
    btnleft1.setAttribute("onclick","finalScreen()");
    btnleft2.setAttribute("onclick","finalScreen()");
    btnleft3.setAttribute("onclick","finalScreen()");
    btnleft4.setAttribute("onclick","finalScreen()");
    btnright1.setAttribute("onclick","finalScreen()");
    btnright2.setAttribute("onclick","finalScreen()");
    btnright3.setAttribute("onclick","finalScreen()");
    btnright4.setAttribute("onclick","finalScreen()");
}