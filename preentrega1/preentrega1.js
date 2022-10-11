
let usuario;
let contraseña;

usuario = "Gabriel";
contraseña= 1921;
{
let usuario = prompt("Ingrese su usuario");
let contraseña = prompt("Ingrese su contraseña");

if(usuario == "Gabriel" & contraseña==1921){
    
    alert("Bienvenido a la tienda bodeguera");
    alert("Se debe actualizar stock");
}
else if(usuario != "Gabriel" || contraseña != 1921){
    alert("No puede ingresar, usuario o contraseña incorrectos")
}
    
}
let eleccion = prompt("SELECCIONA UNA DE LAS 4 CAMISETAS");
if (eleccion == 1) {
    alert("ELEGISTE TEMPORADA 2011-2012");
}else if (eleccion == 2) {
    alert("ELEGISTE TEMPORTADA 2016-2017");
}else if (eleccion == 3) {
    alert("ELEGISTE TEMPORADA 2018");
}else if (eleccion == 4) {
    alert("ELEGISTE TEMPORTADA 2022");
}
else {
    alert("NO SE SELLECIONO NINGUNA OPCIÓN"); 
}
function edad (){
    if (edad >= 18){
        return true 
    }
    else{
        return false
    }
    
}


let edad_usuario = parseInt(prompt("Ingrese su edad"));


if( mayor_de_edad(edad_usuario) ){
    console.log("Puede ingresar")
}
else{
    console.log("No puede ingresar")
}