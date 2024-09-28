import Image from "next/image"

export default async function Surveysection({ customClass, heading, description, image_name }) {
    const global_data = [
        {
            title: "72%",
            description: "of high school students want to start a business someday."
        },
        {
            title: "50%",
            description: "young adults feel they have the skills to start a business."
        },
        {
            title: "7.3M",
            description: "U.S. youth are engaged in entrepreneurship."
        },
        {
            title: "21%",
            description: "small business owners began before age 25."
        },
        {
            title: "46%",
            description: "youth entrepreneurs focus on social or environmental impact."
        },
        {
            title: "30%",
            description: "young entrepreneurs start businesses before finishing college."
        }
    ]
    return (
        <>
            <div className="section-survey section">
                <div className={`main-survey-section ${customClass ? customClass : ''}`}>
                    <div className="page-width">
                        <div className="ss-row">
                            <div className="ss-column img-content-column">
                                <div className="ss-img-inner">
                                    <h2>Empowering the Next Generation of Entrepreneurs</h2>
                                    <h2> — Will YOU Be One of Them?</h2>
                                </div>
                                {image_name && (
                                    <div className="ss-column-image">
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
                            <div className="ss-column ss-content">
                                <div className="ss-content-inner">
                                    <p className="ss-content-title">Middle and high school entrepreneurship education is key to unlocking the potential of young minds, nurturing essential skills, and preparing for future careers. Do you see yourself as one of them?</p>
                                    <div className="globals-surevey-row">
                                        {global_data && (
                                            global_data.map((survey, index) => {
                                                return (
                                                    <div key={`surevey-${index}`} className="survey-box">
                                                        <div className="survey-inside">
                                                            <h2>{survey.title}</h2>
                                                            <p>{survey.description}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}