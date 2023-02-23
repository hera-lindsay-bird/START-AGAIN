import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEntries } from '../actions/entries'
import { useNavigate } from 'react-router-dom'

function Journal() {
  const dispatch = useDispatch()
  const journal = useSelector((state) => state.entries)
  const navigate = useNavigate()
  const navigateToCreateEntry = () => {
    navigate('/create-entry')
  }

  useEffect(() => {
    dispatch(fetchEntries())
  }, [])

  //  TODO: journal?.split('\n') || [] - We need to split the paragraphs coming from useSelector/state

  const handleSubmit = (evt) => {
    evt.preventDefault()
    navigateToCreateEntry()
  }

  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto z-10">
          <button
            onClick={handleSubmit}
            className="px-5 py-3 mt-8 rounded-xl text-sm font-medium text-grey-600 bg-white outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-grey-600 hover:border-4 focus:border-4 hover:border-grey-800 hover:text-grey-800 focus:border-grey-200 active:border-grey-900 active:text-grey-900 transition-all"
          >
            Write a new journal entry
          </button>
          <ul>
            {journal.reverse().map((entries) => (
              <li className="max-w-prose p-12" key={entries.id}>
                <p className="my-2">{new Date(entries.date).toDateString()}</p>
                <p>{entries.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Journal
