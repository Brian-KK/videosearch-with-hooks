import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';
import VideoDetail from './VideoDetail';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount = () => {
		this.onInputSubmit('buildings');
	};

	onInputSubmit = input => {
		youtube
			.get('/search', {
				params: {
					q: input,
				},
			})
			.then(res =>
				this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] })
			);
	};

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar onFormSubmit={this.onInputSubmit} />
				<br />
				<div className='ui grid'>
					<div className='ui row'>
						<div className='eleven wide column'>
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className='five wide column'>
							<VideoList
								videos={this.state.videos}
								onVideoSelect={this.onVideoSelect}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
