import React from "react";

const Upload = ({ onContinueToNotes }) => (
  <>
    <header>
      <h1>AutoNote</h1>
      <nav>
        <a href="index.html">Home</a>
        <a href="upload.html">Upload</a>
        <a href="notes.html">Notes</a>
      </nav>
    </header>

    <section className="upload-section">
      <h2>Upload or Import Media</h2>

      <div className="upload-box">
        <input type="file" id="fileInput" />
        <p>Choose an audio/video file</p>
      </div>

      <div className="import-link">
        <input type="text" placeholder="Paste video URL..." />
        <button>Import</button>
      </div>

      <button className="btn-secondary" onClick={onContinueToNotes}>Continue to Notes</button>
    </section>
  </>
);

export default Upload;