import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import CategoryFilter from "@/components/CategoryFilter";
import ProductList from "@/components/ProductList";
import { obtenerCategorias, obtenerProductos } from "@/services/api";
export default function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [seleccionada, setSeleccionada] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let activo = true;
    Promise.all([obtenerProductos(), obtenerCategorias()])
      .then(([listaProductos, listaCategorias]) => {
        if (!activo) return;
        setProductos(listaProductos);
        setCategorias(listaCategorias);
      })
      .catch((e) => {
        if (activo) setError(e.message);
      })
      .finally(() => {
        if (activo) setCargando(false);
      });

    return () => {
      activo = false;
    };
  }, []);
  const visibles =
    seleccionada === null
      ? productos
      : productos.filter((p) => p.categoria === seleccionada);
  let contenido;
  if (cargando) {
    contenido = (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[4/5] w-full rounded-md" />
        ))}
      </div>
    );
  } else if (error) {
    contenido = (
      <Alert variant="destructive">
        <AlertTitle>No se pudo cargar el catálogo</AlertTitle>
        <AlertDescription>
          {error}. Verifica que el servidor de Django esté en ejecución.
        </AlertDescription>
      </Alert>
    );
  } else {
    contenido = <ProductList productos={visibles} />;
  }
  return (
    <main id="catalogo" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8 border-b border-border pb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Catálogo</p>
        <h1 className="text-3xl font-semibold sm:text-4xl">
          Libros y papelería para leer, estudiar y regalar
        </h1>
      </div>
      <div className="mb-8">
        <CategoryFilter
          categorias={categorias}
          seleccionada={seleccionada}
          onSeleccionar={setSeleccionada}
        />
      </div>
      {contenido}
    </main>
  );
}

