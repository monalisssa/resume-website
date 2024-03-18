import React from 'react';
import { FaGithub } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footer mt-5 d-flex justify-content-end w-100">
            <div className="d-flex gap-5 m-4 fs-5">
                <a className="fs-5 d-flex align-items-center gap-2" href="https://github.com/monalisssa">
                    <FaGithub size={35} className="hover"/>
                    Github
                </a>
                <a className="fs-5 d-flex align-items-center gap-2">
                    <MdAttachEmail size={35}/>
                    eliza.romanova597@gmail.com
                </a>
                <a  className="fs-5 d-flex align-items-center gap-2" href="https://t.me/lisavetta0">
                    <FaTelegram size={35}/>
                    Telegram
                </a>
            </div>
        </div>
    );
};

export default Footer;