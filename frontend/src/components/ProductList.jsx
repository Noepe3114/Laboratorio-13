import ProductCard from "./ProductCard";

export default function ProductList({ productos }) {
  if (productos.length === 0) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        No hay productos en esta categoría.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productos.map((p) => (
        <ProductCard
          key={p.id}
          nombre={p.nombre}
          descripcion={p.descripcion}
          precio={p.precio}
          imagen={p.imagen}
          categoria={p.categoria_nombre}
          cantidad={p.cantidad}
        />
      ))}
    </div>
  );
}