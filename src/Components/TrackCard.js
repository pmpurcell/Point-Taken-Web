import { React, useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import ReactAudioPlayer from "react-audio-player";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {readTextFile} from "../helpers/readTextFile";
import {formatHTML} from "../helpers/formatHTML";

export default function TrackCard({
  imageString,
  trackTitle,
  audioString,
  trackLyricsFile,
}) {
  const [show, setShow] = useState(false);
  const [lyrics, setLyrics] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    readTextFile(trackLyricsFile)
      .then(formatHTML)
      .then(setLyrics)
      .catch((error) => {
        console.error('Error fetching or processing lyrics:', error);
      });
  }, []);

  return (
    <div className="track-card">
      <img className="track-image" src={imageString} alt="{trackTitle} cover" />
      <div className="track-information">
        <div>
          <h3 className="track-title">{trackTitle}</h3>
          <Link className="lyric-link" onClick={handleShow}>Lyrics</Link>
        </div>
        <ReactAudioPlayer className="track-audio" src={audioString} controls />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{trackTitle}</Modal.Title>
        </Modal.Header>
        {/* I don't like this at all */}
        <Modal.Body dangerouslySetInnerHTML={{ __html: lyrics }} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

TrackCard.propTypes = {
  imageString: PropTypes.string,
  trackTitle: PropTypes.string,
  audioString: PropTypes.string,
};
