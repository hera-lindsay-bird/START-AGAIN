import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { getPhoto } from '../apis/images'

export default function Image() {
  const [photo, setPhoto] = useState('')
  const [photographer, setPhotographer] = useState('')
  const [portfolio, setPortfolio] = useState('')
  const [error, setError] = useState(false)
  const [isShowing, setIsShowing] = useState(true)

  useEffect(() => {
    getPhoto()
      .then((photo) => {
        const photoSrc = photo.urls.full
        const photographer = photo.user.name
        const portfolio = photo.user.portfolio_url
        if (portfolio !== null) {
          setPortfolio(portfolio)
        }
        setPhoto(photoSrc)
        setPhotographer(photographer)
        setError(false)
      })
      .catch(() => {
        setError(true)
        setIsShowing(false)
      })
  }, [])

  if (error) {
    return (
      <div
        className="bg-[#e0e7ff] w-full h-screen absolute"
        aria-label="alt-background"
      />
    )
  }

  return (
    <Transition show={isShowing} appear={true}>
      <div className="w-full h-screen absolute">
        <div className="relative h-full">
          <Transition.Child
            enter="transition-opacity duration-[8000ms] h-full"
            enterFrom="opacity-0"
            enterTo="opacity-60"
            entered="h-full"
          >
            <img
              className="object-cover w-full h-full"
              src={photo}
              alt="random nature from unsplash"
            ></img>
            <h3 className="absolute text-white bottom-6 left-8">
              Photographer:
              <a href={portfolio} target="_blank" rel="noreferrer">
                {' '}
                {photographer}
              </a>
            </h3>
          </Transition.Child>
        </div>
      </div>
    </Transition>
  )
}
