import React, { useRef, useState } from 'react';

function LiveRecorder() {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [recording, setRecording] = useState(false);
  const [error, setError] = useState(null); // Error state for webcam/mic

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoRef.current.srcObject = stream;
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = event => {
        if (event.data.size > 0) {
          setRecordedChunks(prev => [...prev, event.data]);
        }
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (err) {
      setError("⚠️ Webcam or Microphone not available."); // Show error
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    const tracks = videoRef.current.srcObject.getTracks();
    tracks.forEach(track => track.stop());
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

      {error ? (
        <>
          <p style={{ color: 'red' }}>{error}</p>
          <h4>Sample Preview (Test Mode)</h4>
          <video
            src="/sample.mp4"
            controls
            width="60%"
            style={{ border: '1px solid #ccc', borderRadius: '10px', marginBottom: '1rem' }}
          />
          <p style={{ fontStyle: 'italic', color: '#555' }}>
            Since webcam/mic are unavailable, this sample video simulates the preview.
          </p>
        </>
      ) : (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{ width: '60%', marginBottom: '1rem' }}
          />
          <br />
          {!recording ? (
            <button onClick={startRecording}>Start Recording</button>
          ) : (
            <button onClick={stopRecording}>Stop Recording</button>
          )}
          <br /><br />
          {recordedChunks.length > 0 && (
            <button onClick={downloadRecording}>Download Recording</button>
          )}
        </>
      )}
    </div>
  );
}

export default LiveRecorder;
