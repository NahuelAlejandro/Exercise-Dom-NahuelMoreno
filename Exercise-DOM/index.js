let titulo = document.getElementById("title");

let tituloPrincipal = "Frutas";

titulo.innerHTML = tituloPrincipal;

let cambiarColor = document.querySelectorAll(".cambiarColor");
for (const newColor of cambiarColor) {
    newColor.classList.add("naranja");
    newColor.classList.remove("cambiarColor");
}


let p = document.querySelector("footer p");

p.innerHTML = "Nahuel Moreno - cohort";

let contenedor = document.getElementById("contenedor");


function crearCard(fruta) {
    return `
    <article class="card">
        <img class="img" src="${fruta.foto}" alt="${fruta.nombre}">
        <h2 class="nombre">${fruta.nombre}</h2>
        <p class="descripcion">${fruta.descripcion}</p>
    </article>
    `
}


function frutasLista(frutas, elemento) {
    let template = ""
    for (const fruta of frutas) {
        template += crearCard(fruta)
    }
     elemento.innerHTML += (template)
}
frutasLista(frutas, contenedor)


let lista = document.getElementById("lista");

// const frutasDulces = []

function crearLista(fruta, element) {
    let h1 = document.createElement("h1")
    h1.className = "h1";
    h1.innerHTML=`Frutas Dulces`
    lista.append(h1)
    let ul = document.createElement("ul")
    ul.className = "ul";
    lista.append(ul)

    fruta.forEach((fruta)=>{ 
    if (fruta.esDulce == true ){
        let li = document.createElement("li");
            li.innerHTML = `${fruta.nombre}`;
            ul.append(li)
            
        }
        element.append(ul)
    }) 
    }
crearLista(frutas, lista)


 


