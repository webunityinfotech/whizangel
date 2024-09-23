import Image from "next/image";

export default async function BackgroundVideo({customClass}) {
    return (
        <>
            <div className={`section-background-video ${customClass ? customClass : ''}`}>
                <div className="background-video-wrapper">
                    <video width="600" height="400" controls>
                        <source src="/videos/samplevideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="video-bg-image">
                        <Image src="/images/video_bg.png" width={1920} height={600} />
                    </div>
                </div>
            </div>
        </>
    )
}