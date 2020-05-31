import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import './printer.scss';

export function printResume(selector) {
    html2canvas(document.querySelector(selector), {
        scale: 0.95,
    }).then(canvas => {
        var pdf = new jsPDF("p", "px", "letter");
        var imgData = canvas.toDataURL("image/jpeg", 1.0);

        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("Yi Zhao - Resume.pdf");
    });
}

export function download(src) {
    const link = document.createElement('a');
    link.href = src;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export default function Printer(props) {
    var selector = props.selector || "#resumePrintDiv";
    return <div className='printer'>
        <div className='button' onClick={() => printResume(selector)}>Download auto-generated PDF</div>
        <div className='button' onClick={() => download(props.srcSelectablePdf)}>View Selectable PDF</div>
    </div>
}
