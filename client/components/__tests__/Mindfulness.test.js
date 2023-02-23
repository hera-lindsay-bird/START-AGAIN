import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Mindfulness from '../Mindfulness'

describe('<Mindfulness/>', () => {
  it('timer renders on screen', () => {
    render(<Mindfulness />)
    const button = screen.getAllByRole('button')
    expect(button[0].innerHTML).toContain('Start')
  })
  it('input field should be a number', async () => {
    render(<Mindfulness />)
    const setTime = screen.getByTestId('mindful')

    await userEvent.click(setTime)
    expect(setTime).toHaveValue()
  })
  it('setTime inputs to timer', async () => {
    render(<Mindfulness />)
    const input = screen.getByRole('spinbutton')
    await userEvent.click(input)
    await userEvent.keyboard('5')

    const button = screen.getByRole('button', { name: 'Set time' })
    await userEvent.click(button)

    const newTime = await screen.findByText('5:5')
    expect(newTime).toBeInTheDocument()
  })
})
