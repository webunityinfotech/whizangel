'use client'
import Image from "next/image";
import { useRef, useState } from "react";

export default  function BackgroundVideo({ customClass }) {
    const videoRef = useRef(null); 
    const videobackground = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false); 

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause(); // Pause the video
            videobackground.current.style.zIndex = 1;
        } else {
            videoRef.current.play(); // Play the video
            videobackground.current.style.zIndex = -1;
        }
        setIsPlaying(!isPlaying); // Toggle the play/pause state
    };
    return (
        <>
            <div className={`section-background-video ${customClass ? customClass : ''}`}>
                <div className="background-video-wrapper">
                    <video ref={videoRef} width="600" height="400" controls>
                        <source src="/videos/samplevideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div ref={videobackground} className="video-bg-image">
                        <Image src="/images/video_bg.png" alt="backgrund play" width={1920} height={600} />
                        <button className="playVideo" onClick={handlePlayPause}>
                            <PlayIcon />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

function PlayIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
            <g clipPath="url(#clip0_908_4763)">
                <path d="M41.4375 33.4685V68.531L44.3206 69.7837L66.9375 52.2524V49.7471L44.3206 32.2158L41.4375 33.4685ZM44.625 36.7484L62.7635 50.9998L44.625 65.2511V36.7484Z" fill="currentColor" />
                <path d="M51 0C37.3782 0 24.5708 5.30719 14.9398 14.9414C5.30559 24.5708 0 37.3782 0 51C0 64.6218 5.30559 77.4292 14.9398 87.0602C24.5708 96.6944 37.3782 102 51 102C64.6218 102 77.4292 96.6928 87.0618 87.0586C96.6944 77.4292 102 64.6218 102 51C102 37.3782 96.6944 24.5708 87.0602 14.9398C77.4292 5.30559 64.6218 0 51 0ZM84.8082 84.8066C75.7764 93.8384 63.7707 98.8125 51 98.8125C38.2293 98.8125 26.2236 93.8384 17.1934 84.805C8.16159 75.7764 3.1875 63.7707 3.1875 51C3.1875 38.2293 8.16159 26.2236 17.1934 17.1934C26.2236 8.16159 38.2293 3.1875 51 3.1875C63.7707 3.1875 75.7764 8.16319 84.8082 17.195C93.84 26.2236 98.8125 38.2293 98.8125 51C98.8125 63.7707 93.84 75.7764 84.8082 84.8066Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_908_4763">
                    <rect width="102" height="102" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}