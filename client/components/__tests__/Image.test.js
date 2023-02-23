import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import { getPhoto } from '../../apis/images'

jest.mock('../../apis/images')

import Image from '../Image'

describe('<Image />', () => {
  it('loads an image from unsplash', async () => {
    getPhoto.mockReturnValue(
      Promise.resolve({
        id: 'H8V-DOtzL5o',
        urls: { full: 'https://images.unsplash.com/' },
        topics: [{ title: 'Nature' }],
        user: { name: 'Sam', portfolio_url: 'xxx' },
      })
    )

    render(<Image />)
    return waitFor(() => getPhoto.mock.calls.length > 0).then(() => {
      const image = screen.getByRole('img')
      expect(image.src).toContain('https://images.unsplash.com/')
    })
  })

  it('shows an error message if image fails to load', async () => {
    getPhoto.mockReturnValue(Promise.reject())

    render(<Image />)
    return waitFor(() => getPhoto.mock.calls.length > 0).then(() => {
      expect(screen.getByLabelText('alt-background')).toHaveClass(
        'bg-[#e0e7ff]'
      )
    })
  })
})
