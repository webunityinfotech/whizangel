import Image from "next/image";

export default async function ImageWithContent({ customClass, heading, description, btn_title, btn_url ,image_name }) {
    return (
        <>
            <div className={`section-image-with-text section ${customClass ? customClass : ''}`}>
                <div className="page-width">
                    <div className="section-iwts-inner">
                        <div className="section-row">
                            <div className="iwts-content">
                                {heading && (
                                    <h2>{heading}</h2>
                                )}
                                {description && (
                                    <div className="itws-description">
                                        {description}
                                    </div>
                                )}
                                {btn_title && (
                                    <div className="iwts-action-buttons">
                                        <a href={btn_url ? btn_url : "#"} className="button">
                                            {btn_title}
                                        </a>
                                    </div>
                                )}
                            </div>
                            {image_name && (
                                <div className="iwts-image">
                                    <Image
                                        src={`/images/${image_name}.png`}
                                        alt="Hero Banner"
                                        width={900}
                                        height={800}
                                        layout="responsive"
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