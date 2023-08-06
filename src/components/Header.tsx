import Link from "next/link"
import Image from 'next/image'

import Logo from '@/public/logo.svg'

import HamburgerMenu from "./HamburgerMenu"


export const Header = () => {
  return (
    <header className="flex items-center text-white max-w-full w-full py-4 px-6 fixed top-0 bg-[#00000099] shadow">
      <Image src={"/logo.png"} alt="" height={60} width={200} />
      <nav className="grid grid-flow-col gap-20 md:flex md:flex-wrap md:justify-end md:w-full mr-20 hidden md:block">
        <Link className="hover:animate-pulse" href="#">Home</Link>
        <Link className="hover:animate-pulse" href="#article-fluxo">Fluxo</Link>
        <Link className="hover:animate-pulse" href="#article-pedido">Pedido</Link>
      </nav>
      <HamburgerMenu className="ml-auto md:hidden">
    
      <Link href="#">Home</Link>
        <Link href="#article-fluxo">Fluxo</Link>
        <Link href="#article-pedido">Pedido</Link>
      </HamburgerMenu>
    </header>
  )
}
