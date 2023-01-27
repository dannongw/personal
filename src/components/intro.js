import React, {useState, useEffect, Component, useRef} from 'react';
import Marquee from "react-fast-marquee";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [0, -distance]);
}

const Intro = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref});
    const y = useParallax(scrollYProgress, 300);

    return (

        <>
            <div className="gra h-[66vh] w-[76vw] absolute z-0 top-[18vh] left-[12vw]"></div>

            <div className="min-[1800px]:text-[12rem] lg:text-[9rem] text-[4rem] h-screen py-24 flex flex-col relative">
                <motion.div style={{y}} className="leading-none text-right z-10">Dannong <br/> Wang</motion.div>

                <div className="leading-none flex-1 flex flex-row z-10">
                    <motion.h1 style={{y}} className="self-end">Full-stack <br/>
                        <h1 className="indent-[6rem] md:indent-[12rem]">Developer</h1></motion.h1>
                </div>


            </div>

            <div className="items-center">
                <h5 className="text-xl py-1 mb-12 border-t border-black">About</h5>
                <h1 className="xl:text-4xl text-2xl leading-tight lg:w-2/3 pb-24 indent-[6rem] uppercase"> Hi, I'm Dannong Wang, a
                    full-stack developer. I enjoy building web
                    application
                    with great user experience. ● Graduated from Rensselaer Polytechnic Institute in Dec 2022 majoring cs. ● Currently seeking software developer jobs. </h1>

                <Marquee gradient={false} speed={100} className="h-28 border-t border-b border-black">
                    <h1 className="xl:text-4xl text-2xl">
                        {["React", "Angular", "Vue", "Svelte", "PHP", "Node.js", "Express.js", "Django", "Next.js", "SQL", "MongoDB", "Tailwind CSS"].map(function (object, i) {
                            return <div className="inline-block xl:ml-16 ml-8">{object}</div>;
                        })
                        }

                    </h1>
                </Marquee>
            </div>


        </>
    )
}

export default Intro;