import React, {Component} from 'react';
import {useRef} from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue, useInView
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [distance, -distance]);
}

const Onework = ({type, children, desc, background, position}) => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll();
    const y = useParallax(scrollYProgress, 200);

    console.log(scrollYProgress)
    let add = " ";
    if (position === "right") {
        add += "flex-row-reverse";
    }
    return (
        <div className="w-full mb-24 flex flex-col
          lg:h-[calc(100vw-30rem)] 2xl:h-[calc(100vw-40rem)]">
            <div className={"lg:w-[calc(100%-30rem)] 2xl:w-[calc(100%-40rem)] lg:absolute " + (position === "left" ? "" : "right-0")} >
                <img src={background} alt=""/>
            </div>


            <motion.div className={"mt-12 z-10 2xl:text-[9rem] lg:text-[6rem] text-[4rem] leading-none  " + (position === "left" ? "text-right" : "")} >
                <h1 className="bg-clip-text inline">{children}</h1> <br/>
            </motion.div>

            <div className={"flex mt-12 lg:mt-48 flex-row " + add}>
                <div className="lg:w-[calc(100vw-30rem)] 2xl:w-[calc(100vw-40rem)] lg:shrink-0"></div>
                <div className={"uppercase text-xl grow-0 lg:w-[30rem] xl:w-[40rem] lg:px-4"}>{desc}</div>

            </div>
        </div>
    )

}

export default Onework;
