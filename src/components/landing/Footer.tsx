import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import Logo from "@/assets/img/logo.svg";
import LogoIcon from "@/assets/icon/Logo";
import FacebookIcon from "@/assets/FacebookIcon";
import InstagramIcon from "@/assets/InstagramIcon";

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


