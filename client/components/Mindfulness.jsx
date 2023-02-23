import React, { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import ReactAudioPlayer from 'react-audio-player'

export default function Mindfulness() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(30)
  const [playSound, setPlaySound] = useState(false)
  const [nextDuration, setNextDuration] = useState(duration)

  function handleStart() {
    setIsPlaying(true)
  }

  function handlePause() {
    setIsPlaying(false)
  }
  function handleChange(event) {
    setNextDuration(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setDuration(nextDuration)
  }

  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto z-10">
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={duration}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[10, 5, 0]}
            onComplete={() => {
              setPlaySound(true)
              setIsPlaying(false)
              return {
                shouldRepeat: true,

                delay: 0.1,
                newInitialRemainingTime: duration,
              }
            }}
          >
            {({ remainingTime }) => {
              const minutes = Math.floor(remainingTime / 60)
              const seconds = remainingTime % 60
              return `${minutes}:${seconds}`
            }}
          </CountdownCircleTimer>

          {playSound && (
            <ReactAudioPlayer src="sounds/happy-bell.wav" autoPlay />
          )}
          <button
            className="px-5 py-3 rounded-xl text-sm font-medium text-grey-600 bg-white outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-grey-600 hover:border-4 focus:border-4 hover:border-grey-800 hover:text-grey-800 focus:border-grey-200 active:border-grey-900 active:text-grey-900 transition-all"
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className="px-5 py-3 rounded-xl text-sm font-medium text-grey-600 bg-white outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-grey-600 hover:border-4 focus:border-4 hover:border-grey-800 hover:text-grey-800 focus:border-grey-200 active:border-grey-900 active:text-grey-900 transition-all"
            onClick={handlePause}
          >
            Pause
          </button>
          <input
            className="px-5 py-3 rounded-xl text-sm font-medium text-grey-600 bg-white outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-grey-600 hover:border-4 focus:border-4 hover:border-grey-800 hover:text-grey-800 focus:border-grey-200 active:border-grey-900 active:text-grey-900 transition-all"
            data-testid="mindful"
            type="number"
            min="0"
            value={nextDuration}
            onChange={handleChange}
          />
          <button
            className="px-5 py-3 rounded-xl text-sm font-medium text-grey-600 bg-white outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-grey-600 hover:border-4 focus:border-4 hover:border-grey-800 hover:text-grey-800 focus:border-grey-200 active:border-grey-900 active:text-grey-900 transition-all"
            onClick={handleSubmit}
          >
            Set time
          </button>
        </div>
      </div>
    </>
  )
}
