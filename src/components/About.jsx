import React from 'react';

import './about.scss';

export default function About() {
    return <div className='about'>
        <div className='container'>
            <div className='card name'>
                <h2>Yi Zhao</h2>
                <p>
                    Full Stack Developer at Samsung SDS America<br />
                    New York City Metropolitan Area
                </p>
            </div>
            <div className='card contact'>
                <p className='b'>Contact Me</p>
                <a target="_blank" rel="noopener noreferrer" href='mailto:genius.zhaoyi@gmail.com'>Email: <span>genius.zhaoyi@gmail.com</span></a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/yi-zhao-a6b642bb/'>LinkedIn: <span>Yi Zhao</span></a>
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/geniuszhaoyi'>GitHub: <span>geniuszhaoyi</span></a>
            </div>
            <div className='card'>
                <h2>Who I Am</h2>
                <p>
                    I am an enthusiastic software developer looking for new challenges.
                </p>
                <p>
                    I am actively looking for new opportunities as Software Application Developer as of May 31, 2020.
                </p>
            </div>
            <div className='card'>
                <h2>Try it yourself</h2>
                <p>
                    <a target="_blank" href="https://glitch.com/edit/?utm_content=project_yi-zhao-resume&utm_source=view_source&utm_medium=button&utm_campaign=glitchButton#!/yi-zhao-resume">
                        Edit it
                    </a>
                    &nbsp;and&nbsp;
                    <a target="_blank" href="https://yi-zhao-resume.glitch.me">
                        View the result
                    </a>
                </p>
            </div>
            <div className='card'>
                <h2>How this website is made</h2>
                <p>
                    To write a resume in 5 minutes, I implemented <a target="_blank" rel="noopener noreferrer" href='https://www.npmjs.com/package/@geniuszhaoyi/resume-template'>this</a> npm
                    library as a quick way to generate resume with multiple pre-defined template.
                    The philosophy underlying this is seperating resume text and styling.
                </p>
                <p>
                    For example, all my resumes above come from one xml-like React Component, like below image, then process it with different template.
                </p>
                <p>
                    To change template, only thing needs to do is replace <span className='code'>BasicResume</span> to <span className='code'>ColorfulResume</span>.
                </p>
                <p>
                    I used third-part libraries to convert DOM to canvas, then to PDF for download.
                </p>
            </div>
            <div className='card'>
                <h2>Installation</h2>
                <p className='code'>
                    npm i @geniuszhaoyi/resume-template --save
                </p>
                <h2>Usage</h2>
                <p></p>
                <img src='/sample usage.png' />
            </div>
        </div>
    </div>
}
