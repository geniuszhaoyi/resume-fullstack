import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import './printer.scss';

function printResume(selector) {
    html2canvas(document.querySelector(selector), {
        scale: 0.95,
    }).then(canvas => {
        var pdf = new jsPDF("p", "px", "letter");
        var imgData = canvas.toDataURL("image/jpeg", 1.0);

        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("Yi Zhao - Resume.pdf");
    });
}

export default function Printer(props) {
    var selector = props.selector || "#resumePrintDiv";
    return <div className='printer'>
        <button onClick={() => printResume(selector)}>print</button>
    </div>
}
