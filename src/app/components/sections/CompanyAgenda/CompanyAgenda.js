import Image from "next/image"
import './companyagenda.css'

export default async function CompanyAgenda({ customClass }) {
    const list_blocks = [
        {
            image_link: "/images/innovate.png",
            title: "We Empower Innovators",
            description: "Turn groundbreaking ideas into impactful startups with our dedicated support, fostering a culture of innovation and entrepreneurial growth.",
            bg_color: "#C9D2FE"
        },
        {
            image_link: "/images/community.png",
            title: "Building Strong Communities",
            description: "Create lasting connections and strengthen resilience through our diverse and inclusive networks.",
            bg_color: "#FFE5C9"
        },
        {
            image_link: "/images/skills.png",
            title: "Enhance Your Skills",
            description: "intentional goal-setting, training courses, mentorship, online resources, and consistent practice",
            bg_color: "#DDC9FF"
        }
    ]
    return (
        <>
            <div className={`section-company-agenda section ${customClass ? customClass : ''}`}>
                <div className="section-row">
                    {list_blocks && list_blocks.map((block,index) => {
                        return (
                            <div key={`sca-${index}`} className="agenda-block">
                                <div className="agenda-iamge-block">
                                    <Image
                                        src={`${block.image_link}`}
                                        alt={block.title}
                                        width={600}
                                        height={600}
                                    />
                                    
                                </div>
                                <div className="agenda-description" style={{background:`${block.bg_color}`}}>
                                    <h2>{block.title}</h2>
                                    <p>{block.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}