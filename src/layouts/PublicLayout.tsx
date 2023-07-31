import { ReactNode } from "react"

import { Open_Sans } from 'next/font/google'

import { Header } from "../components/Header"

interface PublicLayoutProps {
  children: ReactNode,
  className?: string | undefined,
}

const openSans = Open_Sans({ subsets: ['latin'], weight: ["700"] })

export const PublicLayout = ({ children, className }: PublicLayoutProps) => {
  return (
    <>
      <div className={`${openSans.className} max-w-full ${className}`}>
        <Header />
        <div>
          {children}
        </div>
      </div>
    </>
  )
}