import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useSelector, useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import Journal from '../Journal'

jest.mock('react-redux')
jest.mock('react-router-dom')

describe('<Journal />', () => {
  it('renders the mocked data on screen', () => {
    useSelector.mockReturnValue([
      { id: 1, content: 'Hi testing.', date: '2019-05-16', favourite: false },
      {
        id: 2,
        content: 'Hi, no thank you!',
        date: '2019-05-17',
        favourite: false,
      },
    ])
    useDispatch.mockReturnValue(() => {})
    const fakeNavigate = jest.fn()
    useNavigate.mockReturnValue(fakeNavigate)
    render(<Journal />)
    const journalContent = screen.getAllByRole('listitem')
    expect(journalContent[1]).toHaveTextContent('testing')
  })
  it('navigates to create entry', () => {
    const fakeNavigate = jest.fn()
    useNavigate.mockReturnValue(fakeNavigate)
    render(<Journal />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(fakeNavigate).toHaveBeenCalled()
  })
})
