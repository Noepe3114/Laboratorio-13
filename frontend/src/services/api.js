const API_URL = "http://127.0.0.1:8000/api";

async function pedir(ruta) {
  const respuesta = await fetch(`${API_URL}${ruta}`);
  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al consultar ${ruta}`);
  }
  return respuesta.json();
}

export const obtenerProductos = () => pedir("/productos/");
export const obtenerCategorias = () => pedir("/categorias/");