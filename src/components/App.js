import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';
import VideoDetail from './VideoDetail';

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(() => {
		onInputSubmit('buildings');
	}, []);

	const onInputSubmit = async input => {
		const res = await youtube.get('/search', {
			params: {
				q: input,
			},
		});

		setVideos(res.data.items);
		setSelectedVideo(res.data.items[0]);
	};

	const onVideoSelect = video => {
		setSelectedVideo(video);
	};

	return (
		<div className='ui container'>
			<SearchBar onFormSubmit={onInputSubmit} />
			<br />
			<div className='ui grid'>
				<div className='ui row'>
					<div className='eleven wide column'>
						<VideoDetail video={selectedVideo} />
					</div>
					<div className='five wide column'>
						<VideoList videos={videos} onVideoSelect={onVideoSelect} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
