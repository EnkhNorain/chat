import React from 'react';
import 'font-awesome/css/font-awesome.min.css'

export default function({name, numberOfUsers}) {
	
	return (
		<div className="chat-header">
			<div className="user-info">
				<div className="user-name">{'Общий чат'}</div>
				<div className="status">
					<div className="indicator"></div>
					<span>{numberOfUsers ? numberOfUsers : null}</span>
				</div>
			</div>
			<div className="options">
				<i className="fa fa-video-camera"></i>
				<i className="fa fa-user-plus"></i>
				<i className="fa fa-ellipsis-h"></i>
			</div>
		</div>
	);
	
}
