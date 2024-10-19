let productoContainer = document.querySelector("#linea-contenedor");

const urlParams = new URLSearchParams(window.location.search);
const lineaId = urlParams.get("id");


fetch("../lineas.json")
    .then(resp => resp.json())
    .then(data => {
        let lineaCorrecta = data.find((lin) => lin.id === lineaId);
        
        let div = document.createElement("div");
        div.className="descripcion-contenedor";
        div.innerHTML = `
            <div>
                <h2>${lineaCorrecta.titulo}</h2>
                <p>${lineaCorrecta.descripcion}</p>
                <a href="../index.html"> Volver al Analizador </a>
            </div>
            <img src="${lineaCorrecta.img}">
        `;
        let div2= document.createElement("div");
        div2.className="volver";
        div2.innerHTML =`
        
        `

        productoContainer.append(div);
        productoContainer.append(div2);

    })