import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useSelector, useDispatch } from 'react-redux'
import Quote from '../Quote'

jest.mock('react-redux')

describe('<Quote />', () => {
  it('renders the mocked data on screen', () => {
    useSelector.mockReturnValue({ id: 1, text: 'orange', author_id: 1 })
    useDispatch.mockReturnValue(() => {})
    render(<Quote />)
    const quoteDiv = screen.getByTestId('quoteid')
    const blockQuote = screen.getByTestId('blockquoteid')
    expect(quoteDiv).toHaveClass('text-center')
    expect(blockQuote.innerHTML).toContain('orange')
  })
})
