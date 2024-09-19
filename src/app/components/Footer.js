import Image from "next/image";
import Link from "next/link";

export default async function Footer() {
    const footer_link_lists = [
        {
            heading: "About",
            link_list: [
                {
                    title: "How we work",
                    link: "/"
                },
                {
                    title: "Contact us",
                    link: "/"
                },
                {
                    title: "Events",
                    link: "/"
                },
                {
                    title: "Where we work",
                    link: "/"
                },
                {
                    title: "FAQ",
                    link: "/"
                },
            ]
        },
        {
            heading: "Our Policies",
            link_list: [
                {
                    title: "Promoters",
                    link: "/"
                },
                {
                    title: "Testimonials",
                    link: "/"
                },
                {
                    title: "Community QA",
                    link: "/"
                }
            ]
        },
        {
            heading: "Entrepreneurs",
            link_list: [
                {
                    title: "Entrepreneurs",
                    link: "/"
                },
                {
                    title: "Projects",
                    link: "/"
                }
            ]
        }
    ]
    return (
        <div className="section-footer">
            <footer className="footer page-width">
                <div className="footer-grid top-footer-header">
                    <div className="footer-grid-item brand-information">
                        <div className="brand-logo">
                            <Image
                                src="/images/brand-logo.png"
                                alt="Whizangl footer"
                                width={500}
                                height={300}
                                layout="responsive"
                            />
                        </div>
                    </div>
                    {footer_link_lists && footer_link_lists.length && (
                        footer_link_lists.map((ftmenu,index) => {
                            return (
                                <div key={`${ftmenu}-${index}`} className="footer-grid-item">
                                    <h2 className="footer-menu-heading">{ftmenu.heading}</h2>
                                    <ul className="footer-block__details-content list-unstyled">
                                        {ftmenu.link_list.map((link_list,index) => {
                                            return (
                                                <li key={`${link_list}-${index}`}>
                                                    <Link key={`footer-menu-${index}`} href={link_list.link} className="link  link--text list-menu__item list-menu__item--link">
                                                      <span>{link_list.title}</span>  
                                                    </Link >
                                                </li>
                                            )
                                        })}

                                    </ul>
                                </div>
                            )
                        })

                    )}
                </div>
            </footer>
        </div>
    )
}