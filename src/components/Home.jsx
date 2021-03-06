import React from 'react';

import './home.scss';

import Resume from './Resume';

import Printer from './printer-html-canvas'

export default function Home() {
    return <div className='home'>
        <Printer srcSelectablePdf='/Yi Zhao - Full Stack Developer.pdf'/>
        <div className='resumeBorderLetter'>
            <Resume />
        </div>
    </div>
}
