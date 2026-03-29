import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import Logo from "@/assets/img/logo.svg";
import LogoIcon from "@/assets/icon/Logo";

export default function Footer() {

  const { pathname } = useLocation()

  return (
    <footer className="bg-[#4271E5] border-t-[.875rem] border-t-[#3060E3]">
      <Container>
        <div className="text-white/80 flex flex-col md:flex-row justify-between items-center py-10 text-sm gap-8">
          <Link to="/" className="flex items-center gap-4">
                <LogoIcon />
                <img src={Logo} alt="logo" className=""/>
            </Link>
          <nav className="flex flex-col md:flex-row text-center md:text-left gap-6">
            <Link to="/" className={`  hover:text-white transition-colors ${pathname === '/' ? 'text-white' : ''}`}>
              Inicio
            </Link>
            <Link to="/courses" className={`  hover:text-white transition-colors ${pathname === '/courses' ? 'text-white' : ''}`}>
              Cursos
            </Link>
            <Link to="/store" className={`  hover:text-white transition-colors ${pathname === '/store' ? 'text-white' : ''}`}>
              Tienda
            </Link>
            <Link to="/products" className={`  hover:text-white transition-colors ${pathname === '/products' ? 'text-white' : ''}`}>
              Productos
            </Link>
            <Link to="/plans" className={`  hover:text-white transition-colors ${pathname === '/plans' ? 'text-white' : ''}`}>
              Planes
            </Link>
            <Link to="#about" className={`  hover:text-white transition-colors ${pathname === '#about' ? 'text-white' : ''}`}>
              Sobre Nosotros
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link target="_blank" to="https://www.facebook.com/people/RobTech/61554414910232/" className="size-8 flex items-center justify-center transition hover:scale-110">
              <FacebookIcon className="w-6 fill-white" />
            </Link>
            <Link target="_blank" to="https://www.instagram.com/robtech_24/" className="size-8 flex items-center justify-center transition hover:scale-110">
              <InstagramIcon className="w-6 fill-white" />
            </Link>
            <Link target="_blank" to="https://www.tiktok.com/@robtech24?is_from_webapp=1&sender_device=pc" className="h-8 flex items-center justify-center transition hover:scale-110">
              <svg className="w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8.24537V15.5C16 19.0899 13.0899 22 9.5 22C5.91015 22 3 19.0899 3 15.5C3 11.9101 5.91015 9 9.5 9C10.0163 9 10.5185 9.06019 11 9.17393V12.3368C10.5454 12.1208 10.0368 12 9.5 12C7.567 12 6 13.567 6 15.5C6 17.433 7.567 19 9.5 19C11.433 19 13 17.433 13 15.5V2H16C16 4.76142 18.2386 7 21 7V10C19.1081 10 17.3696 9.34328 16 8.24537Z"></path></svg>
            </Link>
          </div>
        </div>
        <div className="py-10">
          <p className="text-white/80 text-center md:text-left">
            &copy; {new Date().getFullYear()} Robtech. Todos los derechos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {

  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    className="hover:fill-primaryCyan fill-white"
    {...props}
  >
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
  </svg>
)

}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    className="hover:fill-primaryCyan fill-white"
    {...props}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)
}
