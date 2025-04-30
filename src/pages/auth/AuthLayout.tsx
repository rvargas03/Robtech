import LogoIcon from '@/assets/img/logo-main.png'
import { Outlet } from 'react-router-dom'
import Logo from "@/assets/img/logo.svg"

export default function AuthLayout() {
  return (
    <>
      <img src={Logo} alt="logo" className="absolute top-8 left-8"/>
      <main className="grid grid-cols-2 h-screen text-white">
          <div className="p-8 flex items-center">
            <Outlet />
          </div>
          <div className="bg-[#4271E5] flex items-center justify-center">
              <img src={LogoIcon} alt="logo" className="w-52"/>
          </div>
      </main>
    </>
  )
}
