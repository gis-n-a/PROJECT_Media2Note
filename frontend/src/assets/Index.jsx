import { useState } from "react";
import "./style.css";
import bg1 from "./images/bg1.png";
import bg2 from "./images/bg2.png";

const Index = ({ onGetStarted, onGoToLive }) => {
  const [backgroundImage, setBackgroundImage] = useState("");

  return (
    <div className="page-container">
      {/* full-screen background layer (behind content) */}
      <div
        className="bg-layer"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        }}
      />

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
        <p>
          Upload or record your sessions and get AI-generated notes instantly.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button
            className="btn-primary"
            onMouseEnter={() => setBackgroundImage(bg1)}
            onMouseLeave={() => setBackgroundImage("")}
            onClick={onGetStarted}
          >
            Get Started
          </button>

          <button
            className="btn-secondary"
            onMouseEnter={() => setBackgroundImage(bg2)}
            onMouseLeave={() => setBackgroundImage("")}
            onClick={onGoToLive}
          >
            Live Session
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
