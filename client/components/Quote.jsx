import React, { useEffect } from 'react'
import { fetchQuote } from '../actions/quote'
import { useDispatch, useSelector } from 'react-redux'
import { Transition } from '@headlessui/react'

export default function Quote() {
  const quote = useSelector((reduxState) => reduxState.quote)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchQuote())
  }, [])
  return (
    <Transition show={true} appear={true}>
      <div className="grid h-44 justify-center items-center">
        <div className="static w-72 md:w-104">
          <div data-testid="quoteid" className="text-center">
            <Transition.Child
              enter="transition-opacity duration-[4000ms]"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <blockquote data-testid="blockquoteid">
                <p>{quote.text}</p>
                <p>~ {quote.name}</p>
              </blockquote>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Transition>
  )
}
