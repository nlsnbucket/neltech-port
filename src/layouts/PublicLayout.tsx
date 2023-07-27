import { ReactNode } from "react"

import { Open_Sans } from 'next/font/google'

import { Header } from "../components/Header"

interface PublicLayoutProps {
  children: ReactNode
}

const openSans = Open_Sans({subsets: ['latin'], weight: ["700"]})

export const PublicLayout = ({children}: PublicLayoutProps) => {
  return (
    <>
      <div className={`${openSans.className}`}>
        <Header />
        {children}
      </div>
    </>
  )
}