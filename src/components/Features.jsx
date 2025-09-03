import React from 'react'
const BentoCard = ({ src, title, description }) => {
    return (
        <div className='relative size-full'>
            <video

                src={src}
                loop
                muted
                autoPlay
                className='absolute left-0 top-0 size-full object-cover object-center'

            />
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
                <div>
                    <h1 className='bento-title special-font'>{title}</h1>
                    {description && (
                        <p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>
                    )}
                </div>

            </div>

        </div>
    )
}

const Features = () => {
    return (
        <section className='bg-black pb-52 mt-0 pt-0'>
            <div className='container mx-auto px-3 md:px-10'>
                <div className='px-5 py-32'>
                    <p className='font-circular-web text-lg text-blue-50'>Into the Metagame layer</p>
                </div>
                    <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
                        Immerse yourself into the Metagame layer and experience the next level of gaming.
                        where a vibrant array of products converge into a interconnected ecosystem, unlocking new possibilities for players and creators alike.
                    </p>
                <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h[65vh]'>
                    <BentoCard
                        src='videos/feature-1.mp4' title={<>radi<b>n</b>t</>} description={<>Experience the radiant world of gaming like never before.</>} />

                </div>
                <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 '>
                    <div className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                        <BentoCard
                            src='videos/feature-2.mp4'
                            title={<>Zig<b>m</b>a</>}
                            description={<>Experience the Zigma world of gaming like never before.</>}
                            />

                    </div>
                    <div className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
                        <BentoCard
                            src='videos/feature-3.mp4'
                            title={<>N<b>e</b>xus</>}
                            description={<><br />Experience the Nexus world of gaming like never before.</>}
                            />

                    </div>
                    <div className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
                        <BentoCard
                            src='videos/feature-4.mp4'
                            title={<>az<b>u</b>bel</>}
                            description={<><br />Experience the Azubel world of gaming like never before.</>}
                            />
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Features