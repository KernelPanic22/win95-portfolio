import React, {useRef,useEffect,RefObject,PropsWithChildren} from 'react';
import Linkedin from '../assets/iPhone-Icons/Linkedin.webp';
import Instagram from '../assets/iPhone-Icons/Instagram.webp';
import Twitch from '../assets/iPhone-Icons/Twitch.png';
import Resume from '../assets/Icons/userCard.png'
import sideBar from '../assets/sidebar-image.png';
import { useOnClickOutside } from 'usehooks-ts'
import './css/StartMenu.css';

interface ComponentProps {
    component: {
        visible: boolean;
        setStartMenu: React.Dispatch<React.SetStateAction<boolean>>;
    };
}

function StartMenu({component}: PropsWithChildren<ComponentProps>) {
    const ref = useRef(null)


    const handleClickOutside = () => {
        if (component.visible) { 
            component.setStartMenu(false);
        }
    }

    useOnClickOutside(ref, handleClickOutside);

    return (
        <div className='socials-menu' >
            <div className='sidebar-menu'>
                <img src={sideBar} alt='sidebar-img' />
            </div>
            <div className='socials'>
                <a href='https://www.linkedin.com/in/lautarovizzari/' target='_blank'>
                    <div className='socials-menu-item'>
                        <img src={Linkedin} alt='linkedin-logo' className='social-image' />
                        <u>L</u>inkedin
                    </div>
                </a>
                <a href='https://www.instagram.com/xluckystrike/' target='_blank'>
                    <div className='socials-menu-item'>
                        <img src={Instagram} alt='instagram-logo' className='social-image' />
                        <u>I</u>nstagram
                    </div>
                </a>
                <a href='https://www.twitch.tv/r3gx' target='_blank'>
                    <div className='socials-menu-item'>
                        <img src={Twitch} alt='twitch-logo' className='social-image' />
                        <u>T</u>witch
                    </div>
                </a>
                <a href='./ResumeSpa.pdf' target='_blank'>
                    <div className='socials-menu-item'>
                        <img src={Resume} alt='resume-logo' className='social-image' />
                        <u>R</u>esume
                    </div>
                </a>
            </div>
        </div>
    );
}
export default StartMenu;