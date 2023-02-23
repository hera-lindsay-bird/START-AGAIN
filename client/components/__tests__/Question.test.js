import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { MemoryRouter as Router } from 'react-router-dom'

import Question from '../Question'

describe('<Question/>', () => {
  it('displays a question', () => {
    render(<Question />)

    const container = screen.getByText('How do you want to start your day?')

    expect(container).toBeInTheDocument()
  })
  it('has content inside the dropdown list', () => {
    render(
      <Router>
        <Question />
      </Router>
    )
    const button = screen.getByRole('button')
    expect(button.innerHTML).toContain('Journaling')
  })
  it('displays dropdown options', async () => {
    render(
      <Router>
        <Question />
      </Router>
    )
    const button = screen.getByRole('button')

    await userEvent.click(button)

    const option = await screen.findByRole('option', { selected: true })
    expect(option).toBeInTheDocument()
  })
})
