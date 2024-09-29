import Image from "next/image";
import Link from "next/link";



export default async function Header() {
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
                    <div className="header-menu-open">
                        <IconHamburger />
                    </div>
                    <h1 className="header__heading">
                        <Link href="/" className="header__heading-link">
                            <div className="header__heading-logo-wrapper">
                                <Image
                                    src="/images/header-logo.png"
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
                    <div className="header-icons"></div>
                </header>
                <div className="header-menu-drawer">
                    <div className="header-drawer-header">
                        <Link href="/" className="header__heading-link">
                            <Image
                                src="/images/header-logo.png"
                                alt="Responsive Image"
                                width={500}
                                height={300}
                                priority
                            />
                        </Link>
                        <button className="close-icon">
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
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            className="icon icon-hamburger"
            fill="none"
            viewBox="0 0 18 16"
        >
            <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor" />
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