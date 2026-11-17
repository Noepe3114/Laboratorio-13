export default function Header() {
  const enlaces = ["Catálogo", "Novedades", "Nosotros", "Contacto"];

  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#catalogo" className="flex items-center gap-3">
          <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
            <rect width="40" height="40" rx="4" fill="#1f3d2f" />
            <path
              d="M13 30V9h8.5a6.5 6.5 0 0 1 0 13H13"
              fill="none"
              stroke="#f6f1e7"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="13" y="33" width="14" height="2" fill="#b4532a" />
          </svg>
          <div>
            <span className="font-display block text-xl font-semibold leading-none">
              Librería Pergamino
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Libros y papelería
            </span>
          </div>
        </a>

        <nav className="hidden gap-6 text-sm sm:flex">
          {enlaces.map((texto) => (
            <a
              key={texto}
              href="#catalogo"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {texto}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}