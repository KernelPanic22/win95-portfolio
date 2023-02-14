import { Document, Page, pdfjs } from 'react-pdf';
import React, { useState } from 'react';
import './css/Resume.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    const [file, setFile] = useState('./ResumeSpa.pdf');
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(3);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    function goToPreviousPage() {
        if (pageNumber === 1) {
            return;
        }
        setPageNumber(pageNumber - 1);
    }

    function goToNextPage() {
        if (pageNumber === numPages) {
            return;
        }
        setPageNumber(pageNumber + 1);
    }

    function downloadFile() {
        window.open(file);
    }


    return (
        <div className='pdf-container'>
            <div className='navigation-container'>
                <nav className='button-container'>
                    <button onClick={goToPreviousPage}>Previous</button>
                    <button onClick={goToNextPage}>Next</button>
                </nav>
                <p className='page-number-container'>
                    Page {pageNumber} of {numPages}
                </p>
                <div className='download-container'>
                    <button onClick={downloadFile}>Download</button>
                </div>
            </div>

            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>

        </div>
    );

}

export default Resume;
