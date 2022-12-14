import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState('');

	const handleOnChange = e => {
		setTerm(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		onFormSubmit(term);
	};

	return (
		<div className='search-bar ui segment'>
			<form className='ui form' onSubmit={onSubmit}>
				<div className='field'>
					<label>Video Search</label>
					<input
						type='text'
						name='video-search'
						placeholder='Search for ..'
						value={term}
						onChange={handleOnChange}
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
