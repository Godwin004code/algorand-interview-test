import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
import Header from '../components/Header/Header'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
  })
})