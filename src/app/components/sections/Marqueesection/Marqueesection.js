'use client'
import Image from 'next/image';
import { useEffect } from 'react';
import Marquee from "react-fast-marquee";
import './marqueesection.css';

const Marqueesection = ({customClass}) => {


    return (
        <div className={`section-marqueesection ${customClass ? customClass : ''}`}>
            <Marquee>
                <MarqueeElement imageName="InfinityParker" maxWidth={255} />
                <MarqueeElement imageName="Wheelapp" maxWidth={245} />
                <MarqueeElement imageName="HighCountryClub" maxWidth={273} />
                <MarqueeElement imageName="Kinetic" maxWidth={222} />
                <MarqueeElement imageName="Grasshopper" maxWidth={260} />
                <MarqueeElement imageName="MajentaMantis" maxWidth={242} />
            </Marquee>
        </div>


    );
};

function MarqueeElement({ maxWidth, imageName }) {
    return (
        <>
            <div className='marqueeElement'>
                <Image
                    src={`/images/${imageName}.png`}
                    alt="marquee"
                    width={maxWidth}
                    height={300}
                />
                <div className='marqudot'>

                </div>
            </div>
        </>
    )
}

export default Marqueesection;
