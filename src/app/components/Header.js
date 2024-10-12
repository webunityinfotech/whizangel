"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); 
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
        document.body.classList.toggle('oveflow-hidden')
    };
    let nav_menu = [
        {
            title: "Entrepreneurs",
            link: "/entrepreneurs"
        },
        {
            title: "Promoters",
            link: "/promoters"
        },
        {
            title: "About Us",
            link: "/about"
        },
        {
            title: "Projects",
            link: "/projects"
        },
        {
            title: "Contact",
            link: "/contact"
        }
    ];
    return (
        <div className="section-header">
            <div className="header-wrapper">
                <header className="header page-width header-logo-left">
                    
                    <h1 className="header__heading">
                        <Link href="/" className="header__heading-link">
                            <div className="header__heading-logo-wrapper">
                                <Image
<<<<<<< HEAD
                                    src="/images/Whizangle_logo.png"
=======
                                    src="/images/whizangle_logo.png"
>>>>>>> 55084e363a6bca014b770f1295858587741aa827
                                    alt="Responsive Image"
                                    width={500}
                                    height={300}
                                    priority
                                />
                            </div>
                        </Link>
                    </h1>
                    <nav className="header__inline-menu medium-hide small-hide">
                        {nav_menu && nav_menu.length && (
                            <ul className="header__inline-menu list-menu--inline list-menu ">
                                {nav_menu.map((menu, index) => {
                                    return (<li key={`key-${index}`}><Link className="list-menu__item header__menu-item link--text" href={menu.link}><span>{menu.title}</span></Link></li>)
                                })}
                            </ul>
                        )}
                    </nav>
                    <div className="header-icons">
                        <div className="header-menu-container" onClick={toggleDrawer}>
                            <IconHamburger />
                        </div>
                    </div>
                </header>
                <div className={`header-menu-drawer ${isDrawerOpen ? "active" : ""}`}>
                    <div className="header-drawer-header">
                        <Link href="/" className="header__heading-link">
                            <Image
                                src="/images/whizangle_logo.png"
                                alt="Responsive Image"
                                width={500}
                                height={300}
                                priority
                            />
                        </Link>
                        <button className="close-icon" onClick={toggleDrawer}>
                            <IconClose />
                        </button>
                    </div>
                    <div className="header-menu-inline-wrapper">
                        {nav_menu && nav_menu.length && (
                            <ul className="header__drawer__menu  list-menu">
                                {nav_menu.map((menu, index) => {
                                    return (<li key={`key-${index}`}><Link className="list-menu__item header__menu-item link--text" href={menu.link}><span>{menu.title}</span></Link></li>)
                                })}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

function IconHamburger() {
    return (
        <svg  className="icon icon-hamburger" xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
        <path d="M1 11H19M1 6H19M1 1H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}
function IconClose() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            className="icon icon-close"
            fill="none"
            viewBox="0 0 18 17"
        >
            <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor" />
        </svg>
    )
}