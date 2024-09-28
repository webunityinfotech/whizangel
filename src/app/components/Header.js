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
                    <h1 className="header__heading">
                        <Link href="/" className="header__heading-link">
                            <div className="header__heading-logo-wrapper">
                                <Image
                                    src="/images/header-logo.png"
                                    alt="Responsive Image"
                                    width={500}
                                    height={300}
                                    layout="responsive"
                                    priority
                                />
                            </div>
                        </Link>
                    </h1>
                    <nav className="header__inline-menu">
                        {nav_menu && nav_menu.length && (
                            <ul className="header__inline-menu list-menu--inline list-menu ">
                                {nav_menu.map((menu, index) => {
                                    return (<li key={`key-${index}`}><Link className="list-menu__item header__menu-item link--text" href={menu.link}><span>{menu.title}</span></Link></li>)
                                })}
                            </ul>
                        )}
                    </nav>
                </header>
            </div>
        </div>
    )
}