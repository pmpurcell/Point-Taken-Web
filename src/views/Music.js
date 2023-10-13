import React from 'react'
import TrackCard from '../Components/TrackCard'
import stranger from '../assets/1A.jpg'
import car from '../assets/front_2.jpg'
import strangerAudio from '../assets/audio/Stranger In The House F8M3.wav'
import carAudio from '../assets/audio/01_Car_Door.wav'
import {default as strangerLyrics} from "../assets/lyrics/Stranger.txt";
import {default as carDoorLyrics} from "../assets/lyrics/Car_Door.txt";

export default function Music() {
  return (
    <div>
      <TrackCard imageString={stranger} trackTitle="Stranger In The House" audioString={strangerAudio} trackLyricsFile={strangerLyrics} />
      <TrackCard imageString={car} trackTitle="Car Door" audioString={carAudio} trackLyricsFile={carDoorLyrics} />
    </div>
  )
}
