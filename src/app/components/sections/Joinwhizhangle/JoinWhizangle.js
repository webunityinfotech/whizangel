import './joinwhizangle.css';

export default async function JoinWhizangle({customClass,heading,description,btn_title,btn_url}){
    const list_coluns = [
        {
            title:"Young Investors",
            description:"If you have a compelling pitch and can clearly explain your business idea to sponsors, you're eligible to join WhizAngel."
        }
    ]
    return(
        <>
            <div className={`section-join-whizangle section ${customClass ? customClass : ''}`}>
                <div className="page-width">
                    <div className="section-heading-jwa center">
                        {heading && (<h2>{heading}</h2>)}
                        {description && (<p>{description}</p>)}
                        {btn_title && (
                            <div className="jwa-action-btn">
                                <a href={btn_url} className="button">{btn_title}</a>
                            </div>)}
                    </div>
                    <div className="jwa-list-row">

                    </div>
                </div>
            </div>
        </>
    )
}