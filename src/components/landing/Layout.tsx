import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsApp from "./WhatsApp";

export default function Layout() {
  return (
    <div className="text-white">
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
        <WhatsApp />
    </div>
  )
}
