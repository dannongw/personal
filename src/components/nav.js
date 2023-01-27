import React, {useState, useEffect, Component} from 'react';
import pdf from '../pdf/Dannong_Wang_Resume.pdf';

const Nav = () => {
    const [hState, sethState] = useState("top");

    useEffect(() => {
        var lastVal = 0;
        window.onscroll = function () {

            let y = window.scrollY;
            if (y > lastVal) {
                sethState(" ");
            }
            if (y < lastVal) {
                sethState("");
            }
            if (y !== 0) {
                sethState("border-b border-black");
            }
            lastVal = y;
        };
    }, []);

    return (
        <div
            className={"z-[10000] transition-all flex text-xl py-4 md:px-12 px-4 fixed w-full border-black backdrop-blur-lg bg-white/50  " + hState}>
            <div className="basis-1/3 shrink-0 grow"><h1>Dannong Wang </h1></div>

            <div className="md:basis-1/3 grow shrink-0 flex flex-row">
                <div className="basis-1/2 shrink-0">
                    <a className="hover:underline" href="mailto:wdn0@icloud.com">wdn0@icloud.com</a>
                </div>
                <div className="basis-1/2 shrink-0 flex flex-col">
                    <a className="hover:underline self-end" target="_blank" href={pdf}>resume</a></div>
            </div>

            <div className="basis-1/3 shrink-0 md:flex hidden flex flex-col"><a className="self-end hover:underline" href={"#work"}>work</a></div>

        </div>


    )
}

export default Nav;