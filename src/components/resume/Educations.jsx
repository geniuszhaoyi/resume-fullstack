import React from 'react';

import './educations.scss';

import { getChildren } from './utils';

import { StartDate, EndDate } from './Date';

export function Educations(props) {
    return <div className='educations'>
        <ul>
            {props.children}
        </ul>
    </div>
}

export function Education(props) {
    const children = getChildren(props.children);
    return <div className='education'>
        <li><span className='b'>{children[Institite.name]}</span></li>
        <p>{children[Degree.name]}, {children[Major.name]}, {children[StartDate.name]} &ndash; {children[EndDate.name]}</p>
    </div>
}

export function Institite(props) {
    return props.children
}

export function Degree(props) {
    return props.children
}

export function Major(props) {
    return props.children
}
