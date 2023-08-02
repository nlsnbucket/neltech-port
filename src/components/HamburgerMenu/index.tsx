import { useState } from "react"; // import state


import styles from "./HamburgerMenu.module.css"







export default function Header(props: any) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className={"flex items-center justify-between border-b border-gray-400 " + props.className}>
      <nav>
        <section className="flex lg:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>
      
          <div className={isNavOpen ? styles.showMenuNav : styles.hideMenuNav}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 60 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="60" y1="12" x2="12" y2="60" />
                <line x1="12" y1="12" x2="60" y2="60" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] ">
              {props.children}
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          {props.children}
        </ul>
      </nav>
    
    </div>
  );
}