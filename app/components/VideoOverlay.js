import React, { useEffect, useState } from 'react';


const VideoOverlay = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowVideo(true);

      // Hide the video after it finishes playing
      setTimeout(() => setShowVideo(false), 30000); // assuming the video is 30 seconds long
    }, 3000); // Show video every 5 minutes

    return () => clearInterval(interval);
  }, []);

  if (!showVideo) {
    return null;
  }

  return (
    <div className="video-overlay">
      <video autoPlay="autoplay" loop="loop" muted="muted" onEnded={() => setShowVideo(false)}>
        <source src="/matrix.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoOverlay;
