import Header from "@/components/Header";
import Catalogo from "@/pages/Catalogo";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Catalogo />
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        Librería Pergamino, Lima, Perú
      </footer>
    </div>
  );
}