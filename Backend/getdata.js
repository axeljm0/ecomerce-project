const base = "";

function getdata(endpoint) {
  return fetch(`${base}${endpoint}`)
    .then(res => res.json())
    .catch(err => {
      console.error("Error al llamar al servidor:", err);
      return []; // Devuelve un array vacío para evitar errores en el frontend
    });
}

export default getdata;
