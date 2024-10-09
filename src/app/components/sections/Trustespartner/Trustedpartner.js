import './trustedpartener.css';

export default async function Trustedpartner({ customClass, heading, description, btn_title, btn_url, image_name }) {
    const icon_list = ['OmegaMillion', 'InfinityParker', 'Wheelapp', 'HighCountryClub', 'Kinetic', 'YellowBook', 'BlueEverest', 'MajentaMantis', 'Calypso', 'Grasshopper', 'ColdGecko', 'MajentaMantis', 'EdgeKart']
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
                            <div className="iwts-image">
                                <div className="iwts-icons-raw">
                                    {icon_list && icon_list.map((icon_name, index) => {
                                        return (
                                            <div key={`icon-${index}`} className="iwts-icon">
                                                <img src={`/images/${icon_name}.png`} />
                                            </div>
                                        );
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}