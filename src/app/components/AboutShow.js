export default async function AboutShow({ customClass, heading, subHeading, description, btn_title, btn_url }) {
    return (
        <>
            <div className="section-about section">
                <div className="page-width">
                    <div className="about-heading">
                        {heading && (
                            <h2 className="abt-heading center">{heading}</h2>
                        )}
                        {subHeading && (
                            <h2 className="abt-subheading center">{subHeading}</h2>
                        )}
                    </div>
                    {description && (
                        <div className="about-description">
                            <p>{description}</p>
                        </div>
                    )}
                    {btn_title && (
                        <div className="action-button center">
                            <a href={btn_url?btn_url:"#"} className="button ">{btn_title}</a>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}