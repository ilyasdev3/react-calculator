import React from 'react'
import { Context } from '../context/CalcolatorContext'
import { useContext } from 'react'

const KeyboardButton = ({ item }) => {
	const { setValue, value, calculateValues } = useContext(Context)

	const handleClick = () => {
		if (item === '=') {
			return setValue(calculateValues(value))
		}
		setValue(`${value}${item}`)
		calculateValues(`${value}${item}`)
	}

	return (
		<button
			onClick={handleClick}
			className='btn'>
			{item}
		</button>
	)
}

export default KeyboardButton
