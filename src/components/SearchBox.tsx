import React from 'react';
import { ChangeEventHandler } from 'react';


interface SearchChangeProps {
	searchChange: ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({ searchChange }: SearchChangeProps) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-blue'
				type='search'
				placeholder='search robots'
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
