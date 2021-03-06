import React from 'react';
import './Post.css';
import PropTypes from 'prop-types';

const Post = props => {
	return (
		<>
			<div className="flex-column-container">
				<img className="thumbnail" src={props.post.thumbnailUrl} alt={'user'} />
				<p>{props.post.username}</p>
			</div>
			<div>
				<img className="img" src={props.post.imageUrl} alt={'post-img'} />
			</div>
		</>
	);
};

Post.propTypes = {
	post: PropTypes.object
};

export default Post;
