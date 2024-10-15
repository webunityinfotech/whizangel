import Image from 'next/image';
import './empowerentrepreneur.css';

export default async function EmpowerEntrepreneur({ customClass, heading, description, btn_title, btn_url }){
    const content_list = [
        {
            title:"Funding",
            description:"Provide direct financial support to entrepreneurs to help them launch and grow their businesses."
        },
        {
            title:"Pitch Contests",
            description:"Host exciting events where young entrepreneurs can present their ideas. Winners receive funding rewards to propel their projects forward."
        },
        {
            title:"Innovation Labs",
            description:"Create spaces where entrepreneurs can collaborate, access resources, and develop their ideas into market-ready solutions."
        },
        {
            title:"Educational Workshops",
            description:"Organize workshops and training sessions to equip young talents with essential skills and knowledge"
        },
        {
            title:"Networking Events",
            description:"Facilitate events that connect entrepreneurs with mentors, industry leaders, and potential investors."
        }
    ]
    return(
        <>
        <div className={`section-empower-entrepreneur section ${customClass ? customClass : ''}`}>
            <div className='page-width'>
                <div className='sec-ee-row'>
                    <div className='sec-image-block'>
                        <Image
                            src={`/images/empower_entrepreneur.png`}
                            alt='Empower Young Entrepreneur'
                            width={900}
                            height={900}
                        />
                    </div>
                    <div className='sec-content-block'>
                        <div className='sec-content-inner'>
                            <div className='sec-ic-sub-title'>How Sponsors' Fees Are Utilized</div>
                            <h2 className='sec-ic-heading'>Empowering Young Entrepreneurs</h2>   
                            <p className='sec-ic-description'>The fees from sponsors are directly invested in empowering youth entrepreneurs through various initiatives :</p>
                            <div className='sec-ic-bulltes'>
                                {content_list.map((clinst,index)=>{
                                    return(
                                    <div key={`sec-ic-bulltes-${index}`} className='sec-ic-bullet-box'>
                                        <h4>{clinst.title}</h4>
                                        <p>{clinst.description}</p>
                                    </div>
                                    )
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