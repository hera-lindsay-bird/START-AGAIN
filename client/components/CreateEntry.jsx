import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEntry } from '../actions/entries'
import { useNavigate } from 'react-router-dom'

function CreateEntry() {
  const [formData, setFormData] = useState(null)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const navigateToJournal = () => {
    navigate('/journaling')
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(addEntry(formData))
    setFormData(null)
    navigateToJournal()
  }

  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto z-10">
          <form>
            <label htmlFor="message">Enter your journal entry</label>
            <textarea
              id="message"
              rows="12"
              className="p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-grey-500 focus:border-grey-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-grey-500 dark:focus:border-grey-500"
              spellCheck="false"
              content="content"
              onChange={handleChange}
              name="content"
            ></textarea>

            <div className="flex flex-col items-center mx-auto mt-4">
              <button
                onClick={handleSubmit}
                className="px-5 py-3 rounded-xl text-sm font-medium text-grey-600 bg-white outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-grey-600 hover:border-4 focus:border-4 hover:border-grey-800 hover:text-grey-800 focus:border-grey-200 active:border-grey-900 active:text-grey-900 transition-all"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateEntry
