import React from 'react'
import './Card.css'
import gitHub from '../images/GitHub-Mark-Light-64px.png';
import linkedIn from '../images/LI-In-Bug.png';
import hackerRank from '../images/HackerRank_logo.svg';
import profileDp from '../images/Melbs Portrait.png';

function Card() {
    return (
        <div className='Background'>
            <div className='Card'>
                <div className='inner-rectangle'></div>
                <img
                    className='melbs-portrait'
                    src={ profileDp }
                    alt="sick dp of me"
                />
                <h1 className='title'>Hey, I'm Justin 👋</h1>
                <div className='first-paragraph'>
                    <span className='bolded'>Currently </span>
                    <span className='first-sentence'>in my 3rd year studying Comp Sci and Commerce @UNSW! <br /><br /></span>
                    <span className='bolded'>Fun Fact: </span>
                    <span className='sentence-second-para'>I probs drink more tea than water everyday 🍵</span>
                </div>
                <div className='tools-used'>Tools Used:</div>
                <a href="https://calendly.com/jwu44" className='contact-button'>Say Hi!</a>
                <a href="https://github.com/Jwu44">
                    <img
                        className='github-img'
                        src={ gitHub }
                        alt="github logo"
                    />
                </a>
                <a href="https://www.linkedin.com/in/justin-wu-03651a1ab/">
                    <img
                        className='linkedin-img'
                        src={ linkedIn }
                        alt="linkedin logo"
                    />
                </a>
                <a href="https://www.hackerrank.com/justin_wu4444?hr_r=1">
                    <img
                        className='hackerrank-img'
                        src={ hackerRank }
                        alt="hackerrank logo"
                    />
                </a>
                <div className='react-tool-box'>
                    <div className='tool-text'>React</div>
                </div>
                <div className='js-tool-box'>
                    <div className='tool-text'>JS</div>
                </div>
                <div className='css-tool-box'>
                    <div className='tool-text'>CSS</div>
                </div>
                <div className='html-tool-box'>
                    <div className='tool-text'>HTML</div>
                </div>
                <div className='figma-tool-box'>
                    <div className='tool-text'>Figma</div>
                </div>
            </div>
        </div>
    )
}

export default Card 