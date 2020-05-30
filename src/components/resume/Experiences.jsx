import React from 'react';

import './experiences.scss';

import { getChildren } from './utils';

import { StartDate, EndDate } from './Date';
import { Address } from './Address';

export function Experiences(props) {
    return <div className='experiences'>
        {props.children}
    </div>
}

export function Experience(props) {
    const children = getChildren(props.children);
    return <div className='experience'>
        <p className='timePeriod'>{children[StartDate.name]} &ndash; {children[EndDate.name]}</p>
        <div className='content'>
            <p className='b'>{children[Title.name]}</p>
            <p><span className='b'>{children[Company.name]}</span> &ndash; {children[Address.name]}</p>
            <ul className='description'>
                {children[Description.name]}
            </ul>
        </div>
    </div>
}

export function Company(props) {
    return props.children
}

export function Title(props) {
    return props.children
}

export function Description(props) {
    return props.children
}
