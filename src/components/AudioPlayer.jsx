import React from 'react';

function AudioPlayer() {
  let audio = new Audio("/sampleName.mp3")

  const start = () => {
    audio.play()
  }

  return (
    < div >
      <button onClick={start} className="btn btn-primary">Hear Name</button>
    </div >
  );
}

export default AudioPlayer;