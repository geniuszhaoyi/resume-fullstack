import React from 'react';

export function Email(props) {
    let { enableLink, link } = props;
    if (enableLink) {
        if (!link && typeof (props.children) === 'string') {
            link = props.children;
        }
        return <div className='email'>Email: <a href={'mailto:' + props.children}>{props.children}</a></div>
    } else {
        return <div className='email'>Email: {props.children}</div>
    }
}
