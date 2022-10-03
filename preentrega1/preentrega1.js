

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
