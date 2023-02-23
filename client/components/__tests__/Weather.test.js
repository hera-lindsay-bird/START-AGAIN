import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'

import { getWeather } from '../../apis/weather'

jest.mock('../../apis/weather')
jest.spyOn(console, 'error')
import Weather from '../Weather'

describe('<Weather/>', () => {
  test('Loads weather from api on load', async () => {
    getWeather.mockReturnValue(
      Promise.resolve({
        weather: [{ description: 'sunny', icon: '' }],
        main: { temp_min: 12, temp_max: 14 },
      })
    )
    render(<Weather />)
    return waitFor(() => getWeather.mock.calls.length > 0).then(() => {
      let weather = screen.getByText('14')
      expect(weather).not.toBeNull()
    })
  })
  test('Shows error message if api request fails', async () => {
    console.error.mockImplementation(() => {})
    getWeather.mockImplementation(() =>
      Promise.reject({ message: 'Not found' })
    )
    render(<Weather />)
    return waitFor(() => getWeather.mock.calls.length > 0).then(() => {
      expect(console.error).toHaveBeenCalledWith('Not found')
    })
  })
})
