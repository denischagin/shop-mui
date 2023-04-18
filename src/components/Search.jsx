import { TextField } from '@mui/material'
import React from 'react'

const Search = ({value, onChange}) => {
	return (
		<TextField 
			type="search" 
			label="Поиск товара"
			fullWidth
			variant='standard'
			value={value} 
			onChange={onChange}
		
		/>
	)
}

export default Search