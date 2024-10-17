
import './joinwhizangle.css';
import {AgeLimit, AspiringLeader, CretativeThinker, IconInvestor, ProgressiveThinker} from '../../svg/WhizangleIcons';
export default async function JoinWhizangle({ customClass, heading, description, btn_title, btn_url }) {
    const list_box = [
        {
            title:"Young Investors",
            content:"If you have a compelling pitch and can clearly explain your business idea to sponsors, you're eligible to join WhizAngel.",
            icon:<IconInvestor />,
            color:"#C5E3FF"
        },
        {
            title:"Age Limit",
            content:"We support individuals up to 21 years old who are ready to make an impact WhizAngel’s Entrepreneurships.",
            icon:<AgeLimit />,
            color:"#D2FFBC"
        },
        {
            title:"Progressive Thinkers",
            content:"If you have a compelling pitch and can clearly explain your business idea to sponsors, you're eligible to join WhizAngel.",
            icon:<ProgressiveThinker />,
            color:"#F3BCFF"
        },
        {
            title:"Creative Thinkers",
            content:"If you have a compelling pitch and can clearly explain your business idea to sponsors, you're eligible to join WhizAngel.",
            icon:<CretativeThinker />,
            color:"#AEFFD8"
        },
        {
            title:"Aspiring Leaders",
            content:"Young talents eager to learn, grow, and connect with a community of mentors and sponsors dedicated to helping you succeed.",
            icon:<AspiringLeader />,
            color:"#D3CBFF"
        }
    ]
    return (
        <>
            <div className={`section-join-whizangle section ${customClass ? customClass : ''}`}>
                <div className='page-width'>
                    <div className='headings-jwa center'>
                        {heading && (
                            <h2>{heading}</h2>
                        )}
                        {description && (
                            <div className="jwa-description">
                                {description}
                            </div>
                        )}
                        {btn_title && (
                            <div className="jwa-action-buttons">
                                <a href={btn_url ? btn_url : "#"} className="button">
                                    {btn_title}
                                </a>
                            </div>
                        )}

                    </div>
                    <div className='jwa-list-row'>
                        {list_box.map((list,index)=>{
                            return(
                                <div key={`${list.title.replaceAll(' ','-')}`} className='jwa-list-item center' style={{backgroundColor:`rgba(${hex2rgb(list.color)},0.3)`}}>
                                    <div className='jwa-item-image' style={{backgroundColor:list.color}}>
                                        {list.icon}
                                    </div>
                                    <div className='jwa-item-title'>
                                        <h2>{list.title}</h2>
                                    </div>
                                    <div className='jwa-item-description'>
                                        <p>{list.content}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )

}

const hex2rgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const rgba_string = `${r},${g},${b}`;
    return rgba_string;
}
