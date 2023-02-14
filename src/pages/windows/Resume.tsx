import { Document, Page } from 'react-pdf';
import React, { useState } from 'react';
import ResumePdf from '../../assets/Resume/ResumeSpa.pdf'

function Resume() {
    const [file, setFile] = useState('./ResumeSpa.pdf');
    const [numPages, setNumPages] = useState(0);
  
    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }
  
    return (
      <div className="Example">
        <header>
          <h1>react-pdf sample page</h1>
        </header>
        <div className="Example__container">
          <div className="Example__container__load">
            <label htmlFor="file">Load from file:</label>{' '}
          </div>
          <div className="Example__container__document">
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>
    );
  
}
  
export default Resume;
