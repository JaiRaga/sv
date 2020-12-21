import React from 'react';

const CameraPage = () => {
	let videourl = '';

	if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
		console.log("Let's get this party started");
		console.log(
			navigator.mediaDevices
				.getUserMedia({ video: true })
				.then((res) => {
					videourl = res.id;
					console.log(videourl, typeof videourl);
					// videourl = videourl.split('').shift().pop().join('');
					console.log('Success', res);
				})
				.catch((err) => console.log('Error', err))
		);
	}

	const getDevices = async () => {
		const devices = await navigator.mediaDevices.enumerateDevices();

		console.log('Devices*******', devices);

		return devices;
	};

	getDevices();
	// console.log('Devices', getDevices());
	console.log('////////////////', videourl);

	return (
		<div>
			Camera Page
			<video autoplay>
				<source src={videourl} />
			</video>
		</div>
	);
};

export default CameraPage;
