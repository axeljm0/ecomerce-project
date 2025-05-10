import getData from "./getdata.js";

getData("/productos")
  .then(data => {
    const contenedor = document.querySelector("produc-card");
    data.forEach(producto => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h2>${producto.name}</h2>
        <img src="${producto.image}" alt="${producto.name}" width="150">
        <p>Descripción: ${producto.descripcion}</p>
      `;
      contenedor.appendChild(div);
    });
  });

  
