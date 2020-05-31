import React from 'react';

import './home.scss';

import Resume from './Resume';

import Printer from './printer-html-canvas'

export default function ColorfulResume() {
    return <div className='home'>
        <Printer srcSelectablePdf='/colorful resume.pdf' />
        <div className='resumeBorderLetter'>
            <Resume template='colorful' />
        </div>
    </div>
}
