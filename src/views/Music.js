import React from 'react'
import TrackCard from '../Components/TrackCard'
import stranger from '../assets/1A.jpg'
import strangerAudio from '../assets/audio/Stranger In The House F8M3.wav'

export default function Music() {
  return (
    <div>
      <TrackCard imageString={stranger} trackTitle="Stranger In The House" audioString={strangerAudio} />
    </div>
  )
}
