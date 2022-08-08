import VideoItem from './VideoItem';

const VideoList = props => {
	const renderedList = props.videos.map(vid => {
		return (
			<VideoItem
				key={vid.id.videoId}
				video={vid}
				onVideoSelect={props.onVideoSelect}
			/>
		);
	});

	return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default VideoList;
