import React from "react";
import './SideBar.css';
import { BsLinkedin, BsGithub} from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";

function SideBar() {
    return (
        <div className='container'>
            <div className='SideBar'>
                <a href='https://www.linkedin.com/in/lucas-rodrigues-830636202/'><BsLinkedin size={35}/></a>
                <a href='https://github.com/L-Lutece'><BsGithub size={35}/></a>
                <a href='https://1drv.ms/w/s!AoeTPjBJhtYXg7tALt__Oo5KCMz7Ww?e=8oRwbf'><FaClipboardList size={35}/></a>
            </div>
        </div>
    )
 }

export default SideBar;