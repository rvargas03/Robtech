import { Link } from "react-router-dom";
import Container from "./Container";
import { Button } from "../ui/button";
import Logo from "@/assets/img/logo.svg"
export default function Header() {
  return (
    <header className="">
        <Container>
            <div className="h-20 flex items-center justify-between text-sm font-medium">
                <Link to="/" className="">
                    <img src={Logo} alt="logo" className=""/>
                </Link>
                <nav className="flex items-center text-white/80">
                    <Link to="/about" className=" py-1.5 px-3.5 hover:text-white transition-colors">
                        About
                    </Link>
                    <Link to="/courses" className=" py-1.5 px-3.5 hover:text-white transition-colors">
                        Courses
                    </Link>
                    <Link to="/products" className=" py-1.5 px-3.5 hover:text-white transition-colors">
                        Products
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Button variant={'ghost'} asChild>
                        <Link to="/auth" className="">
                        Iniciar Sesión
                        </Link>
                    </Button>
                    <Button asChild> 
                        <Link to="/auth/register" className="">
                            Registrarse
                        </Link>
                    </Button>
                </div>
            </div>
        </Container>
    </header>
  )
}
