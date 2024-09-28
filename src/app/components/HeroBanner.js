import Image from "next/image";


export default async function HeroBanner({ customClass, heading, description, btn_title, btn_url ,image_name }) {
    return (
        <>
            <div className="section-hero section">
                <div className={`main-section-hero ${customClass ? customClass:''}`}>
                    <div className="page-width">
                        <div class="section-row">
                            <div className="section-content">
                                <div className="section-content-inner">
                                    <h2 className="hxl hero-heading" dangerouslySetInnerHTML={{ __html: heading }} />
                                    <p>{description}</p>
                                    {btn_title && (
                                        <div className="hero-action-buttons">
                                            <a href={btn_url ? btn_url : "#"} className="button">{btn_title}
                                                <svg className="aerrow-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M21 12L16 7M21 12L16 17M21 12H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </a>
                                        </div>
                                    )}
                                </div>

                            </div>
                            {image_name && (
                                <div className="section-image">
                                <Image
                                    src={`/images/${image_name}.png`}
                                    alt="Hero Banner"
                                    width={900}
                                    height={800}
                                    layout="responsive"
                                    priority
                                />
                            </div>
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}