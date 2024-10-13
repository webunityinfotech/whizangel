import './whizanglejourney.css'
export default async function Whizanglejourney({ customClass, heading, description, btn_title, btn_url }) {
    const box_list = [
        {
            title: "Networking",
            description: "Join a community of like-minded young entrepreneurs and build connections that will last a lifetime"
        },
        {
            title: "Mentorship",
            description: "Connect with industry experts who can guide you on your entrepreneurial journey"
        },
        {
            title: "Workshops",
            description: "Gain valuable skills and insights through our specialized workshops."
        },
        {
            title: "Funding Opportunities",
            description: "Gain valuable skills and insights through our specialized workshops."
        }
    ]
    return (
        <>
            <div className={`section-whizangle-journey section ${customClass ? customClass : ''}`}>
                <div className='page-width'>
                    <div className='swaj-row'>
                        <div className='swaj-content'>
                            {heading && (
                                <h2>{heading}</h2>
                            )}
                            {description && (
                                   <p>{description}</p> 
                            )}
                            {btn_title && (
                                <div className="swaj-action-buttons">
                                    <a href={btn_url ? btn_url : "#"} className="button">
                                        {btn_title}
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className='swa-content-box'>
                            <div className='swa-content-box-list'>
                                {box_list.map((bxlist,index)=>{
                                    return(
                                        <>
                                            <div key={`${bxlist.title}-${index}`} className='swaj-box-item'>
                                                <h2>{bxlist.title}</h2>
                                                <p>{bxlist.description}</p>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}