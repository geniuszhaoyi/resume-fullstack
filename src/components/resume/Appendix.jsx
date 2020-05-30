import React from 'react';

import './appendix.scss';

import { getChildren } from './utils';

import { Item } from './Item';

export function Appendix(props) {
    const children = getChildren(props.children);
    if (children[Item.name]) {
        return <div className='appendix'>
            <div className='header'>{props.title}</div>
            <hr />
            <ul>
                {props.children}
            </ul>
        </div>
    } else {
        return <div className='appendix'>
            <div className='header'>{props.title}</div>
            <hr />
            {props.children}
        </div>
    }
}
