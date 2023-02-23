import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useSelector, useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import CreateEntry from '../CreateEntry'
jest.mock('react-redux')
jest.mock('react-router-dom')

const fakeDispatch = jest.fn()
useDispatch.mockReturnValue(fakeDispatch)

describe('< CreateEntry />', () => {
  it('renders the create entry editor on screen', () => {
    useSelector.mockReturnValue([{ content: 'Hi testing create post.' }])
    useDispatch.mockReturnValue(() => {})
    const fakeNavigate = jest.fn()
    useNavigate.mockReturnValue(fakeNavigate)
    render(<CreateEntry />)
    const button = screen.getByRole('button')
    expect(button.innerHTML).toBe('Post')
  })
  it('adds an entry', () => {
    const fakeNavigate = jest.fn()
    useNavigate.mockReturnValue(fakeNavigate)
    render(<CreateEntry />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(fakeNavigate).toHaveBeenCalled()
  })
})
