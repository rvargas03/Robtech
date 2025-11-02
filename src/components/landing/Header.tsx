import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import { Button } from "../ui/button";
import Logo from "@/assets/img/logo.svg"
import { useEffect, useRef, useState } from "react";
export default function Header() {


  const { pathname } = useLocation()
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(pathname === '/course' && headerRef?.current){
        console.log(pathname);
        
      headerRef.current.style.display = 'none'
    }else if ( headerRef?.current){
        headerRef.current.style.display = 'block'
    }
    
  },  [pathname, headerRef])


  return (
    <header className="" ref={headerRef}>
        <Container>
            <div className="h-20 flex items-center justify-between text-sm font-medium">
                <Link to="/" className="">
                    <img src={Logo} alt="logo" className=""/>
                </Link>
                <nav className="hidden md:flex items-center text-white/80">
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
                <div className="hidden md:flex items-center gap-4">
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
