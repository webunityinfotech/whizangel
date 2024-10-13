import Image from 'next/image';
import './empowerentrepreneur.css';

export default async function EmpowerEntrepreneur({ customClass, heading, description, btn_title, btn_url }){
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
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}