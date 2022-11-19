import React, { createContext, useEffect, useMemo, useState } from 'react'

export const Context = createContext()

const CalcolatorContexProvider = ({ children }) => {
	const [value, setValue] = useState('')

	const calculateValues = (value) => {
		const valArray = value.split(/(\+|\-|\*|\/)/)
		let operator = ''

		return valArray.reduce((prev, curr) => {
			if (isNaN(curr)) {
				operator = curr
				return prev
			}
			if (operator === '+') {
				return prev + parseInt(curr)
			}
			if (operator === '-') {
				return prev - parseInt(curr)
			}
			if (operator === '*') {
				return prev * parseInt(curr)
			}
			if (operator === '/') {
				return prev / parseInt(curr)
			}

			return parseInt(curr)
		}, 0)
	}

	return (
		<Context.Provider value={{ value, setValue, calculateValues }}>{children}</Context.Provider>
	)
}

export default CalcolatorContexProvider
