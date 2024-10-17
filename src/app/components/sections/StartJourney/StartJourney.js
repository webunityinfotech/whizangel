import './startjourney.css'
export default async function StartJourney({ customClass, heading, description, btn_title, btn_url }) {
    return (
        <>
            <div className={`section-start-journey section ${customClass ? customClass : ''}`}>
                <div className="page-width">
                    <div className="start-journey-row">
                        <div className='ssj-content'>
                            {heading && (
                                <h2>{heading}</h2>
                            )}
                            {description && (
                                <p>{description}</p>
                            )}
                        </div>
                        <div className='ssj-button'>
                            {btn_title && (
                                <div className="ssj-action-buttons">
                                    <a href={btn_url ? btn_url : "#"} className="button">
                                        {btn_title}
                                            <svg className="aerrow-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M21 12L16 7M21 12L16 17M21 12H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}