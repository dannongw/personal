import React, {useState, useEffect, Component} from 'react';
import pdf from '../pdf/Dannong_Wang_Resume.pdf';

const Footer = () => {

    return (

        <div className=" overflow-x-hidden border-t border-black pt-16">
            <div className="text-[4rem] lg:text-[9rem] leading-none">Get in</div>
            <div className="text-[4rem] lg:text-[9rem] leading-none flex flex-row">
                <div className="">→</div>
                <div className="flex flex-col grow">
                    <div className="self-end">touch</div>
                </div>
            </div>
            <div className="flex flex-row h-[20vh] py-12 text-xl">
                <div className="self-end">

                    <div className="">
                        <a href="mailto:wdn0@icloud.com" className="hover:underline">wdn0@icloud.com</a></div>
                    <a href="https://github.com/dannongw" target="_blank" className="text-right hover:underline">GitHub</a> <br/>
                    <a href={pdf} target="_blank" className="text-right hover:underline">Resume</a>
                </div>
            </div>
        </div>


    )
}

export default Footer;