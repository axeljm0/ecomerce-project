const base = "http://127.0.0.1:5500"; 
const endpoint = "/productos";

function getdata() {
  fetch(`${base}${endpoint}`)
    .then(res => res.json()) // ← con paréntesis
    .then(data => {
      console.log("Datos recibidos:", data);
    })
    .catch(err => {
      console.error("Error al llamar al servidor:", err);
    });
}

export default getdata