import React, { useState } from 'react'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
const choices = [{ activity: 'Journaling' }, { activity: 'Mindfulness' }]

export default function Question() {
  const [selected, setSelected] = useState(choices[0])

  return (
    <>
      <Transition show={true} appear={true}>
        <div className="grid justify-around">
          <div className="static w-72 md:w-104">
            <div className="text-center" id="question">
              <Transition.Child
                enter="transition-opacity duration-[4000ms]"
                enterFrom="opacity-0"
                enterTo="opacity-100"
              >
                How do you want to start your day?
              </Transition.Child>
            </div>
            <Transition.Child
              enter="transition-opacity duration-[9500ms]"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{selected.activity}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {choices.map((choice, choiceIdx) => (
                      <Listbox.Option
                        key={choiceIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={choice}
                      >
                        {({ selected }) => (
                          <>
                            <Link
                              to={`/${choice.activity}`}
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {choice.activity}
                            </Link>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </Transition.Child>
          </div>
        </div>
      </Transition>
    </>
  )
}
