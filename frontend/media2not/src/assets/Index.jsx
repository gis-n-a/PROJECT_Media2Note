import React from "react";
import './style.css'
const Index = ({ onGetStarted }) => (
  <>
    <header>
      <h1>AutoNote</h1>
      <nav>
        <a href="index.html">Home</a>
        <a href="upload.html">Upload</a>
        <a href="notes.html">Notes</a>
      </nav>
    </header>

    <section className="hero">
      <h2>Transform Your Meetings into Notes</h2>
      <p>Upload or record your sessions and get AI-generated notes instantly.</p>
      <button className="btn-primary" onClick={onGetStarted}>Get Started</button>
    </section>
  </>
);

export default Index;