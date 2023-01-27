import React, {useState, useEffect, Component} from 'react';
import pdf from '../pdf/Dannong_Wang_Resume.pdf';

const Footer = () => {

    return (

        <div className=" overflow-x-hidden border-t border-black pt-16">
            <div className="text-[4rem] lg:text-[9rem] leading-none">Get in</div>
            <div className="text-[4rem] lg:text-[9rem] leading-none text-right">touch</div>
            <div className="flex flex-row h-[20vh] py-12 text-xl">
                <div className="self-end">

                    <div className="">wdn0@icloud.com</div>
                    <a href="https://github.com/dannongw" target="_blank" className="text-right hover:underline">Github</a> <br/>
                    <a href={pdf} target="_blank" className="text-right hover:underline">Resume</a>
                </div>
            </div>
        </div>


    )
}

export default Footer;