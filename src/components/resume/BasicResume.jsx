import React from 'react';

import './basicResume.scss';

import { getChildren } from './utils';

import { Address } from './Address';
import { Phone } from './Phone';
import { Email } from './Email';
import { Experiences } from './Experiences';
import { Educations } from './Educations';
import { Appendix } from './Appendix';

export * from './Address';
export * from './Date';
export * from './Phone';
export * from './Email';
export * from './Item';
export * from './Experiences';
export * from './Educations';
export * from './Appendix';

export default function BasicResume(props) {
    const children = getChildren(props.children);
    console.log(children);
    return <div className='basicResume'>
        <div id='resumePrintDiv'>
            <div className="section nameSection">
                {children[Name.name]}
            </div>
            <div className='section contactSection'>
                <div className='floatLeft'>
                    {children[Address.name]}
                </div>
                <div className='floatRight'>
                    {children[Phone.name]}
                    {children[Email.name]}
                </div>
            </div>
            {children[Summary.name] && <div className='section summarySection'>
                <div className='header'>Summary</div>
                <hr />
                {children[Summary.name]}
            </div>}
            <div className='section experiencesSection'>
                <div className='header'>Professional Experience</div>
                <hr />
                {children[Experiences.name]}
            </div>
            <div className='section educationSection'>
                <div className='header'>Education</div>
                <hr />
                {children[Educations.name]}
            </div>
            {children[Appendix.name] && children[Appendix.name].map((a, i) => <div key={i} className='section experiencesSection'>
                {a}
            </div>)}
        </div>
    </div>
}

export function Name(props) {
    return <span className='name'>{props.children}</span>
}

export function Summary(props) {
    return props.children
}