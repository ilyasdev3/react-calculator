import { useContext } from 'react'
import '../assets/calculator.css'
import { Context } from '../context/CalcolatorContext'
import KeyboardButton from './KeyboardButton'
import keyboardSymbols from '../json/keyboardSymbols.json'

const Calculator = () => {
	const { value, setValue } = useContext(Context)
	return (
		<>
			<section className='calculator'>
				<header className='screen'>{value === '' ? '0' : value}</header>
				<main className='button-group'>
					{keyboardSymbols.map((item) => {
						return <KeyboardButton item={item} />
					})}
				</main>
				<footer>
					<button
						className='btn-clear'
						onClick={() => {
							setValue('')
						}}>
						Clear
					</button>
				</footer>
			</section>
		</>
	)
}

export default Calculator
