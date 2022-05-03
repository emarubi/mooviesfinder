import React from 'react';

import './SearchBox.css'

const SearchBox = (props:any) => {

	return (
		<div className='col col-sm-4'>
			<input
				className='movie-input'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='Type to search...'
                required
			></input>
             <button type="submit" onClick={props.submitSearch}>
                Search
             </button>
		</div>
	);
};

export default SearchBox;