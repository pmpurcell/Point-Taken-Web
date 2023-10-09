import React from "react";
import { PropTypes } from "prop-types";

export default function TrackCard({ imageString, trackTitle, audioString }) {
  return (
    <div className="track-card">
      <img className="track-image" src={imageString} alt="{trackTitle} cover" />
      <div className="track-information">
        <h3 className="track-title">{trackTitle}</h3>
        <p>Lyrics</p>
      </div>
      <div className="track-audio">
        <audio  controls>
          <source type="audio/wav" src={audioString} />
        </audio>
      </div>
    </div>
  );
}

TrackCard.propTypes = {
  imageString: PropTypes.string,
  trackTitle: PropTypes.string,
  audioString: PropTypes.string,
};
