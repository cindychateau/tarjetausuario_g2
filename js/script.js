function hola_mundo() {
    // console.log("Hola");
    // console.log("Cómo estás?");
    // console.log("Yo excelente!");
    alert("¡Hola!");
}
/*
 * nombre = "Juana" 
 * IMPRIMO Hello Juana
 * 
 * nombre_completo = "Juana de Arco"
 * nombre = nombre_completo = "Juana de Arco"
 * IMPRIMO Hello Juana de Arco
 */
function hello_world(nombre) {
    console.log("Hello "+ nombre); //Imprime
}

//hola_mundo();

hello_world("Cynthia");
hello_world("Juana");

var nombre_completo = "Juana de Arco";
hello_world(nombre_completo);

function cambiar_titulo(elemento) { //elemento = ETIQUETA H1
    console.log(elemento); //imprime elemento

    if(elemento.innerText === "Picasso") {
        elemento.innerText = "Juana de Arco";
    } else {
        elemento.innerText = "Picasso";
    }

     //<h1 onclick="cambiar_titulo(this)">INNER TEXT</h1>
}

function cambia_img(etiqueta_img) {
    etiqueta_img.src = "icons/map-marker.png";
}

function cambiar_h1() {
    var etiqueta_h1 = document.querySelector("h1"); //Seleccionando la etiqueta H1
    etiqueta_h1.innerText = "Juana de Arco";
}

function cambiar_h3() {
    var clase_h3 = document.querySelector(".claseh3"); //Seleccionando la clase claseh3
    clase_h3.style.color = "blue";
    //background-color
    clase_h3.style.backgroundColor = "rgb(0, 0, 0)";
}

var n = 0;

function incrementa() {
    n++;
    var elemento = document.querySelector("#numero"); //Seleccionamos aquel que tiene el ID numero
    elemento.innerText = n;
}

function over(boton){
    boton.style.backgroundColor = "purple";
}

function out(boton){
    boton.style.backgroundColor = "gray";
}

function cambiar_clase() {
    var b = document.querySelector("#btn"); //Seleccionando aquel elemento con ID btn

    var b_1 = document.getElementById("btn");

    // if(b.classList.contains("btn-amarillo")){
    //     b.classList.remove("btn-amarillo"); //Quitando la clase btn-amarillo
    //     b.classList.add("btn-verde"); //Agregando la clase btn-verde
    // } else {
    //     b.classList.remove("btn-verde");
    //     b.classList.add("btn-amarillo");
    // }

    b.classList.toggle("btn-amarillo");
    b.classList.toggle("btn-verde");

}

function cambiar_imgh3() {
    var img = document.querySelector('h3 img'); //Seleccionamos la imagen que está dentro de h3
    img.src = "icons/gear.png";
}

function eliminar(id) {
    var elemento_eliminar = document.querySelector(id); //Me selecciona aquel que tiene la ID que recibimos
    elemento_eliminar.remove();
}