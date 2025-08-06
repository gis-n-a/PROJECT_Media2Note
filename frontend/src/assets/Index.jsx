import React from "react";
import './style.css';

const Index = ({ onGetStarted, onGoToLive }) => (
  <>
    <header>
      <h1>Media2Note</h1>
      <nav>
        <a href="index.html">Home</a>
        <a href="upload.html">Upload</a>
        <a href="notes.html">Notes</a>
      </nav>
    </header>

    <section className="hero">
      <h2>Transform Your Meetings into Notes</h2>
      <p>Upload or record your sessions and get AI-generated notes instantly.</p>
      
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button className="btn-primary" onClick={onGetStarted}>Get Started</button>
        <button className="btn-secondary" onClick={onGoToLive}>Live Session</button>
      </div>
    </section>
  </>
);

export default Index;
