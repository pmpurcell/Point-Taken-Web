import React from "react";
import { PropTypes } from "prop-types";
import ReactAudioPlayer from "react-audio-player";

export default function TrackCard({ imageString, trackTitle, audioString }) {
  return (
    <div className="track-card">
      <img className="track-image" src={imageString} alt="{trackTitle} cover" />
      <div className="track-information">
        <h3 className="track-title">{trackTitle}</h3>
        <p onClick={() => {console.warn('click')}}>Lyrics</p>
      <ReactAudioPlayer className="track-audio" src={audioString} controls />
      </div>
    </div>
  );
}

TrackCard.propTypes = {
  imageString: PropTypes.string,
  trackTitle: PropTypes.string,
  audioString: PropTypes.string,
};
