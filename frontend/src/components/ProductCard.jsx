import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductCard({ nombre, descripcion, precio, imagen, categoria, cantidad }) {
  const agotado = cantidad === 0;

  return (
    <Card className="h-full gap-0 overflow-hidden rounded-md py-0 shadow-none">
      <div className="aspect-[4/5] overflow-hidden bg-secondary">
        <img
          src={imagen}
          alt={nombre}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <Badge
          variant="secondary"
          className="w-fit rounded-sm text-[11px] uppercase tracking-wider"
        >
          {categoria}
        </Badge>
        <h3 className="text-lg font-semibold leading-snug">{nombre}</h3>
        <p className="line-clamp-3 text-sm text-muted-foreground">{descripcion}</p>
      </div>

      <div className="flex items-center justify-between border-t border-border p-4">
        <span className="font-display text-xl font-semibold">
          S/ {Number(precio).toFixed(2)}
        </span>
        <span className={agotado ? "text-xs font-medium text-accent" : "text-xs text-muted-foreground"}>
          {agotado ? "Agotado" : `${cantidad} disponibles`}
        </span>
      </div>
    </Card>
  );
}