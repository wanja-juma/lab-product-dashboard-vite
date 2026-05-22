
import '@testing-library/jest-dom'
import { render, test, expect, screen, fireEvent } from '@testing-library/react'
import App from '../App'

const sampleProducts = [
  { id: 1, name: 'Laptop', price: '$999', inStock: true },
  { id: 2, name: 'Phone', price: '$699', inStock: false },
  { id: 3, name: 'Tablet', price: '$499', inStock: true },
]

test('renders product dashboard title', () => {
  render(<App />)
  expect(screen.getByText(/Product Dashboard/i)).toBeInTheDocument()
})

test('displays all products initially', () => {
  render(<App />)

  sampleProducts.forEach((product) => {
    expect(screen.getByText(product.name)).toBeInTheDocument()
  })
})

test('shows out-of-stock indicator for unavailable products', () => {
  render(<App />)

  expect(screen.getByText('Phone')).toBeInTheDocument()
  expect(screen.getByText(/out of stock/i)).toBeInTheDocument()
})

test('removes product from the dashboard when "Remove" button is clicked', () => {
  render(<App />)

  const removeButtons = screen.getAllByText(/Remove/i)

  // click first remove button
  fireEvent.click(removeButtons[0])

  // safer check: ensure one product is removed
  expect(screen.queryByText('Laptop')).not.toBeInTheDocument()
})