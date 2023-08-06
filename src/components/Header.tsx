import Link from "next/link"
import Image from 'next/image'

import Logo from '@/public/logo.svg'

export const Header = () => {
  return(
    <header className="w-full flex gap-60 items-center text-white">
      <Image src={""} alt="" height={86} width={160}/>

      <nav className="flex gap-24">
        <Link href="/">
          Home
        </Link>
        <Link href="/fluxo">
          Fluxo
        </Link>
        <Link href="/pedido">
          Pedido
        </Link>
      </nav>
    </header>
  )
}