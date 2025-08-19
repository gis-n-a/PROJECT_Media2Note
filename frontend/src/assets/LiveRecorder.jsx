import React, { useRef, useState } from 'react';

function LiveRecorder() {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [recording, setRecording] = useState(false);
  const [error, setError] = useState(null);

  const startRecording = async () => {
    try {
      setError(null); // Reset previous errors

      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoRef.current.srcObject = stream;

      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (err) {
      console.error("Error accessing media devices:", err);
      setError("⚠️ Unable to access webcam/microphone. Please check permissions.");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();

    const stream = videoRef.current.srcObject;
    stream.getTracks().forEach((track) => track.stop());
    setRecording(false);
  };

  const downloadRecording = () => {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recording.webm';
    a.click();
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Live Session Recorder</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: '60%', borderRadius: '10px', marginBottom: '1rem' }}
      />
      <br />

      {/* LiveRecorder.jsx */}
{!recording ? (
  <button 
    onClick={startRecording} 
    style={{ 
      backgroundColor: "#007bff", // Blue background
      color: "white",            // White text
      padding: "14px 26px",
      border: "none",
      borderRadius: "10px",
      fontSize: "16px",
      cursor: "pointer"
    }}
  >
    Start Recording
  </button>
) : (
  <button 
    onClick={stopRecording} 
    style={{ 
      backgroundColor: "#dc3545", // Red background
      color: "white",
      padding: "14px 26px",
      border: "none",
      borderRadius: "10px",
      fontSize: "16px",
      cursor: "pointer"
    }}
  >
    Stop Recording
  </button>
)}


      <br /><br />

    {recordedChunks.length > 0 && (
  <button 
    onClick={downloadRecording}
    style={{
      backgroundColor: "#28a745", // Green background
      color: "white",             // White text
      padding: "14px 26px",
      border: "none",
      borderRadius: "10px",
      fontSize: "16px",
      cursor: "pointer",
      fontWeight: "bold"
    }}
  >
    Download Recording
  </button>
)}

      
    </div>
  );
}

export default LiveRecorder;
