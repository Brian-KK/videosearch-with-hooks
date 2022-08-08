import React from 'react';

class SearchBar extends React.Component {
	state = { input: '' };

	handleOnChange = e => {
		this.setState({ input: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.input);
	};

	render() {
		return (
			<div className='search-bar ui segment'>
				<form className='ui form' onSubmit={this.handleSubmit}>
					<div className='field'>
						<label>Video Search</label>
						<input
							type='text'
							name='video-search'
							placeholder='Search for ..'
							value={this.state.input}
							onChange={this.handleOnChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
