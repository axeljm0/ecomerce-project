fetch("Products.json")
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector(".products");  // Asegúrate de tener un <div class="products"></div> en tu HTML
    data.forEach(product => {
      const productHTML = document.createElement("article").classList.add("product-card")
      productHTML.innerHTML += `
          <img src="${productos.images}" class="product-image" />
          <div class="product-info">
            <h2 class="product-name">${products.name}</h2>
            <p class="product-price">${products.price}</p>
            <button class="add-to-cart" type="button" onclick="alert('${product.name} agregado al carrito')">Agregar al carrito</button>
          </div>
      `;
      container.appendChild(productHTML);
    }).join("");
  })
  .catch(error => {
    console.error('Error cargando productos:', error);
 });

