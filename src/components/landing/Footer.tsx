import { Link } from "react-router-dom";
import Container from "./Container";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#4271E5] border-t-[.875rem] border-t-[#3060E3]">
      <Container>
        <div className="text-white/80 flex justify-between items-center py-10 text-sm">
          <Link to="/" className="">
            Logo
          </Link>
          <div className="flex gap-6 items-center">
            <nav className="flex gap-6">
              <Link to="/" className="transition hover:text-white">
                Inicio
              </Link>
              <Link to="/products" className="transition hover:text-white">
                Productos
              </Link>
              <Link to="/cart" className="transition hover:text-white">
                Carrito
              </Link>
              <Link to="/plans" className="transition hover:text-white">
                Plans
              </Link>
            </nav>
            <div className="flex gap-4">
              <Link to="/products" className="size-12 flex items-center justify-center rounded-full bg-white text-blue-500">
                <Facebook size={20} />
              </Link>
              <Link to="/products" className="size-12 flex items-center justify-center rounded-full bg-white text-blue-500">
                <Twitter size={20} />
              </Link>
              <Link to="/products" className="size-12 flex items-center justify-center rounded-full bg-white text-blue-500">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="py-10">
            <p className="text-white/80">
              &copy; {new Date().getFullYear()} Robertech. Todos los derechos
              reservados.
            </p>
          </div>
      </Container>
    </footer>
  );
}
