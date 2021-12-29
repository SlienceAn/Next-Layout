import React from 'react';
import PieChart from './PieChart';
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterSquare,
    AiFillLinkedin
} from 'react-icons/ai'
import { DiReact, DiSass } from 'react-icons/di'
import { SiRedux, SiNodedotjs } from 'react-icons/si'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-content-col">
                    <h1>
                        <DiReact fontSize="3rem" />
                        title
                    </h1>
                    <p>Contrary to popular belief,
                        Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock,
                        from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                        discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                    </p>
                    <div className="footer-content-col-icons">
                        <AiFillFacebook fontSize="2.5rem" />
                        <AiFillInstagram fontSize="2.5rem" />
                        <AiFillLinkedin fontSize="2.5rem" />
                        <AiFillTwitterSquare fontSize="2.5rem" />
                    </div>
                </div>
                <div className="footer-content-col">
                    <h1>
                        <DiSass fontSize="3rem" />
                        title
                    </h1>
                    <li>about</li>
                    <li>about</li>
                    <li>about</li>
                    <li>about</li>
                    <div className="footer-input">
                        <input type="text" placeholder="請輸入"/>
                        <button>傳送</button>
                    </div>
                </div>
                <div className="footer-content-col">
                    <h1>
                        <SiNodedotjs fontSize="3rem" />
                        title
                    </h1>
                    <li>about</li>
                    <li>about</li>
                    <li>about</li>
                    <li>about</li>
                </div>
                <div className="footer-content-col">
                    <h1>
                        <SiRedux fontSize="3rem" />
                        title
                    </h1>
                    <PieChart />
                </div>
            </div>
            <div className="footer-bottom">
                @ Next.js+Sass-此專案僅供練習用，無任何商業用途
            </div>
        </footer>
    )
}

export default Footer;