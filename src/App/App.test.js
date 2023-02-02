import '@testing-library/jest-dom'
import {render, screen, fireEvent} from '@testing-library/react'
import {renderWithProviders} from '../Redux/test-util'
import {App} from './App'

test('renders with default class name', () => {
	const {container} = renderWithProviders(<App />)
	const intro = container.getElementsByClassName('intro')
	expect(intro.length).toBe(1)
	expect(intro).toBe()
	})
test('should change class name if intro is clicked', () => {
	const {container} = renderWithProviders(<App />)
	fireEvent.click(screen.getByText(/profile/i))
	let intro
	intro = container.getElementsByClassName('intro')
	expect(intro.length).toBe(0)
	
	fireEvent.click(screen.getByText(/intro/i))
	intro = container.getElementsByClassName('intro')
	expect(intro.length).toBe(1)
	})
test('should change class name if profile is clicked', () => {
	const {container} = renderWithProviders(<App />)
	fireEvent.click(screen.getByText(/profile/i))
	const profile = container.getElementsByClassName('profile')
	expect(profile.length).toBe(1)
	})
test('should change class name if project is clicked', () => {
	const {container} = renderWithProviders(<App />)
	fireEvent.click(screen.getByText(/project/i))
	const profile = container.getElementsByClassName('project')
	expect(profile.length).toBe(1)
	})
test('should change class name if contacts is clicked', () => {
	const {container} = renderWithProviders(<App />)
	fireEvent.click(screen.getByText(/contacts/i))
	const profile = container.getElementsByClassName('contacts')
	expect(profile.length).toBe(1)
	})

