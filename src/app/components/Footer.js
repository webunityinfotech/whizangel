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

    const social_link_list = [
        {
            icon: <FacebookIcon />,
            link: "/"
        },
        {
            icon: <TwitterIcon />,
            link: "/"
        },
        {
            icon: <IntagramIcon />,
            link: "/"
        },
        {
            icon: <GoogleIcon />,
            link: "/"
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
                            />
                        </div>
                        <div className="brand-contact">
                            <div className="br-phone-number footer-inline-link">
                                <a target="_blank" href="tel:(603) 555-0123" >
                                    <PhoneIcon />
                                    Phone : (603) 555-0123
                                </a>
                            </div>
                            <div className="br-email footer-inline-link">
                                <a target="_blank" href="mailto:nvt.isst.nute@gmail.com" >
                                    <EmailIcon />
                                    nvt.isst.nute@gmail.com
                                </a>
                            </div>
                            <div className="social-share">
                                <p>Follow Us</p>
                                <div className="social-linklist">
                                    {social_link_list && social_link_list.map((sc_link_list,index) => {
                                        return (
                                            <a key={`${sc_link_list}-${index}`} target="_blank" href={sc_link_list.link} className="socialIcon">
                                                {sc_link_list.icon}
                                            </a>
                                        )

                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    {footer_link_lists && footer_link_lists.length && (
                        footer_link_lists.map((ftmenu, index) => {
                            return (
                                <div key={`${ftmenu}-${index}`} className="footer-grid-item">
                                    <h2 className="footer-menu-heading">{ftmenu.heading}</h2>
                                    <ul className="footer-block__details-content list-unstyled">
                                        {ftmenu.link_list.map((link_list, index) => {
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
                <div className="footer-bottom">
                    <div className="copypright-block">
                        <CopyRightIcon /> 2024 WhizAngel
                    </div>
                    <div className="policies-links">
                        <Link href="/">Privacy Policy</Link>
                        <Link href="/">Terms of Use</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function CopyRightIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
            <g clipPath="url(#clip0_741_4979)">
                <path d="M18.5188 32.4072C26.1894 32.4072 32.4077 26.1889 32.4077 18.5183C32.4077 10.8477 26.1894 4.62939 18.5188 4.62939C10.8482 4.62939 4.62988 10.8477 4.62988 18.5183C4.62988 26.1889 10.8482 32.4072 18.5188 32.4072Z" stroke="currentColor" strokeWidth="2.46914" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23.1484 21.9906C22.4195 22.9621 21.4035 23.6796 20.2442 24.0416C19.0849 24.4035 17.841 24.3916 16.6889 24.0074C15.5368 23.6232 14.5347 22.8863 13.8246 21.901C13.1145 20.9158 12.7324 19.732 12.7324 18.5175C12.7324 17.303 13.1145 16.1193 13.8246 15.134C14.5347 14.1487 15.5367 13.4118 16.6888 13.0276C17.841 12.6435 19.0848 12.6315 20.2441 12.9934C21.4034 13.3554 22.4195 14.0729 23.1484 15.0443" stroke="currentColor" strokeWidth="2.46914" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_741_4979">
                    <rect width="37.037" height="37.037" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

function FacebookIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
            <g clipPath="url(#clip0_741_4922)">
                <path d="M9.49748 0.470703C4.32934 0.470703 0.139648 4.66358 0.139648 9.83565C0.139648 14.2274 3.16111 17.9127 7.237 18.9249V12.6976H5.30742V9.83565H7.237V8.60248C7.237 5.41502 8.67848 3.93761 11.8055 3.93761C12.3984 3.93761 13.4214 4.05411 13.8399 4.17023V6.76432C13.619 6.7411 13.2354 6.72949 12.7589 6.72949C11.2246 6.72949 10.6316 7.31124 10.6316 8.82349V9.83565H13.6883L13.1631 12.6976H10.6316V19.132C15.2653 18.572 18.8557 14.6238 18.8557 9.83565C18.8553 4.66358 14.6656 0.470703 9.49748 0.470703Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_741_4922">
                    <rect width="18.7157" height="18.7299" fill="white" transform="translate(0.139648 0.470703)" />
                </clipPath>
            </defs>
        </svg>
    )
}
function TwitterIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M14.8776 1.95605H17.5083L11.761 8.52985L18.5222 17.4753H13.2282L9.08177 12.0499L4.33728 17.4753H1.70499L7.85231 10.4439L1.36621 1.95605H6.79462L10.5427 6.91505L14.8776 1.95605ZM13.9543 15.8995H15.412L6.00254 3.44909H4.43828L13.9543 15.8995Z" fill="currentColor" />
        </svg>
    )
}

function GoogleIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clipPath="url(#clip0_741_4928)">
                <path d="M9.84277 8.13232V11.7591H14.879C14.6578 12.9255 13.9942 13.9131 12.9989 14.5771L16.0359 16.9354C17.8054 15.3009 18.8262 12.9 18.8262 10.048C18.8262 9.38393 18.7667 8.74535 18.6561 8.13243L9.84277 8.13232Z" fill="currentColor" />
                <path d="M4.59781 11.6177L3.91285 12.1424L1.48828 14.0324C3.02807 17.0887 6.18397 19.2001 9.842 19.2001C12.3686 19.2001 14.4868 18.3658 16.0351 16.9356L12.9981 14.5773C12.1644 15.1392 11.101 15.4797 9.842 15.4797C7.40898 15.4797 5.34181 13.8366 4.60164 11.6231L4.59781 11.6177Z" fill="currentColor" />
                <path d="M1.48814 5.63794C0.850143 6.8979 0.484375 8.31969 0.484375 9.83508C0.484375 11.3505 0.850143 12.7723 1.48814 14.0322C1.48814 14.0407 4.6018 11.6144 4.6018 11.6144C4.41465 11.0525 4.30402 10.4566 4.30402 9.83498C4.30402 9.21341 4.41465 8.6175 4.6018 8.0556L1.48814 5.63794Z" fill="currentColor" />
                <path d="M9.8422 4.19916C11.2204 4.19916 12.4454 4.67591 13.4237 5.59539L16.1034 2.91365C14.4785 1.39825 12.3688 0.470215 9.8422 0.470215C6.18417 0.470215 3.02807 2.57307 1.48828 5.63797L4.60184 8.05583C5.34192 5.84227 7.40918 4.19916 9.8422 4.19916Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_741_4928">
                    <rect width="18.7157" height="18.7299" fill="white" transform="translate(0.484375 0.470215)" />
                </clipPath>
            </defs>
        </svg>
    )
}

function IntagramIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
            <g clipPath="url(#clip0_741_4931)">
                <path d="M9.39494 2.15664C11.8952 2.15664 12.1913 2.16761 13.1746 2.21151C14.0885 2.25175 14.582 2.40539 14.9109 2.53343C15.3459 2.70171 15.6603 2.90656 15.9856 3.23214C16.3146 3.56138 16.5157 3.87233 16.6838 4.30765C16.8118 4.63689 16.9653 5.1344 17.0055 6.04529C17.0494 7.03299 17.0603 7.32931 17.0603 9.82785C17.0603 12.33 17.0494 12.6264 17.0055 13.6104C16.9653 14.525 16.8118 15.0188 16.6838 15.348C16.5157 15.7834 16.311 16.098 15.9856 16.4236C15.6566 16.7528 15.3459 16.954 14.9109 17.1223C14.582 17.2503 14.0848 17.4039 13.1746 17.4442C12.1877 17.4881 11.8916 17.4991 9.39494 17.4991C6.89465 17.4991 6.59856 17.4881 5.61525 17.4442C4.7014 17.4039 4.20792 17.2503 3.87894 17.1223C3.44394 16.954 3.12958 16.7491 2.80425 16.4236C2.47526 16.0943 2.27422 15.7834 2.10607 15.348C1.97813 15.0188 1.8246 14.5213 1.78439 13.6104C1.74053 12.6227 1.72956 12.3264 1.72956 9.82785C1.72956 7.32565 1.74053 7.02934 1.78439 6.04529C1.8246 5.13074 1.97813 4.63689 2.10607 4.30765C2.27422 3.87233 2.47892 3.55772 2.80425 3.23214C3.13324 2.90291 3.44394 2.70171 3.87894 2.53343C4.20792 2.40539 4.70506 2.25175 5.61525 2.21151C6.59856 2.16761 6.89465 2.15664 9.39494 2.15664ZM9.39494 0.470215C6.85444 0.470215 6.53642 0.481189 5.53849 0.525088C4.54422 0.568986 3.86066 0.729946 3.26849 0.960411C2.65072 1.20185 2.128 1.52011 1.60893 2.04323C1.08621 2.5627 0.76819 3.08582 0.526933 3.70039C0.296643 4.29667 0.135805 4.9771 0.0919404 5.97212C0.0480756 6.97446 0.0371094 7.29273 0.0371094 9.83516C0.0371094 12.3776 0.0480756 12.6959 0.0919404 13.6945C0.135805 14.6896 0.296643 15.3737 0.526933 15.9663C0.76819 16.5845 1.08621 17.1076 1.60893 17.6271C2.128 18.1466 2.65072 18.4685 3.26483 18.7063C3.86066 18.9367 4.54057 19.0977 5.53484 19.1416C6.53276 19.1855 6.85078 19.1965 9.39129 19.1965C11.9318 19.1965 12.2498 19.1855 13.2477 19.1416C14.242 19.0977 14.9256 18.9367 15.5177 18.7063C16.1318 18.4685 16.6546 18.1466 17.1736 17.6271C17.6927 17.1076 18.0144 16.5845 18.252 15.9699C18.4823 15.3737 18.6431 14.6932 18.687 13.6982C18.7308 12.6995 18.7418 12.3813 18.7418 9.83882C18.7418 7.29638 18.7308 6.97812 18.687 5.97944C18.6431 4.98441 18.4823 4.30033 18.252 3.70771C18.0217 3.08582 17.7037 2.5627 17.1809 2.04323C16.6619 1.52377 16.1392 1.20185 15.5251 0.96407C14.9292 0.733604 14.2493 0.572644 13.255 0.528746C12.2535 0.481189 11.9354 0.470215 9.39494 0.470215Z" fill="currentColor" />
                <path d="M9.39474 5.02466C6.74092 5.02466 4.58789 7.17933 4.58789 9.83517C4.58789 12.491 6.74092 14.6457 9.39474 14.6457C12.0486 14.6457 14.2016 12.491 14.2016 9.83517C14.2016 7.17933 12.0486 5.02466 9.39474 5.02466ZM9.39474 12.9556C7.67305 12.9556 6.27669 11.5582 6.27669 9.83517C6.27669 8.11216 7.67305 6.71474 9.39474 6.71474C11.1164 6.71474 12.5128 8.11216 12.5128 9.83517C12.5128 11.5582 11.1164 12.9556 9.39474 12.9556Z" fill="currentColor" />
                <path d="M15.5139 4.83449C15.5139 5.45638 15.0095 5.95755 14.3917 5.95755C13.7703 5.95755 13.2695 5.45272 13.2695 4.83449C13.2695 4.2126 13.774 3.71143 14.3917 3.71143C15.0095 3.71143 15.5139 4.21626 15.5139 4.83449Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_741_4931">
                    <rect width="18.7157" height="18.7299" fill="white" transform="translate(0.0371094 0.470215)" />
                </clipPath>
            </defs>
        </svg>
    )
}

function PhoneIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
            <path d="M15.747 7.71873C15.2437 6.4595 14.025 5.63379 12.6698 5.63379H8.11148C6.37742 5.63379 4.97168 7.04025 4.97168 8.77564C4.97168 23.5264 16.9208 35.4845 31.6603 35.4845C33.3944 35.4845 34.7998 34.0776 34.7998 32.3422L34.8005 27.7797C34.8005 26.4234 33.9757 25.204 32.7174 24.7004L28.3485 22.9521C27.2182 22.4997 25.9314 22.7033 24.9962 23.4832L23.8686 24.4243C22.5518 25.5225 20.6142 25.4352 19.4022 24.2222L16.2272 21.0419C15.0151 19.8289 14.9255 17.8914 16.0229 16.5736L16.9631 15.4452C17.7424 14.5093 17.9477 13.2211 17.4956 12.09L15.747 7.71873Z" stroke="currentColor" strokeWidth="2.34124" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
function EmailIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M6.6288 9.98967L16.7499 17.6385L16.7532 17.6413C17.877 18.4661 18.4393 18.8787 19.0551 19.0381C19.5994 19.179 20.1716 19.179 20.7159 19.0381C21.3323 18.8786 21.8961 18.4648 23.0219 17.6385C23.0219 17.6385 29.5137 12.6529 33.1427 9.98967M4.97168 26.2421V13.6384C4.97168 11.7809 4.97168 10.8514 5.33291 10.1419C5.65066 9.51782 6.1573 9.01079 6.78091 8.6928C7.48987 8.3313 8.41863 8.3313 10.2748 8.3313H29.4973C31.3535 8.3313 32.2802 8.3313 32.9892 8.6928C33.6128 9.01079 34.1211 9.51782 34.4389 10.1419C34.7998 10.8507 34.7998 11.7791 34.7998 13.633V26.2477C34.7998 28.1016 34.7998 29.0286 34.4389 29.7374C34.1211 30.3615 33.6128 30.8694 32.9892 31.1874C32.2809 31.5486 31.3546 31.5486 29.5021 31.5486H10.2693C8.41681 31.5486 7.48917 31.5486 6.78091 31.1874C6.1573 30.8694 5.65066 30.3615 5.33291 29.7374C4.97168 29.0279 4.97168 28.0996 4.97168 26.2421Z" stroke="currentColor" strokeWidth="2.34124" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}