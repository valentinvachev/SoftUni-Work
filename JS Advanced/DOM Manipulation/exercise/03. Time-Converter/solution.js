function attachEventsListeners() {
	let totalInSeconds = 0;
	let days = document.getElementById('days');
	let hours = document.getElementById('hours');
	let minutes = document.getElementById('minutes');
	let seconds = document.getElementById('seconds');

	document.addEventListener('click', (e) => {
		if (e.target.type === 'button') {
			let input = e.target.previousElementSibling;
			switch (input.id) {
				case 'days':
					totalInSeconds = input.value * 24 * 60 * 60;
					break;
				case 'hours':
					totalInSeconds = input.value * 60 * 60;
					break;
				case 'minutes':
					totalInSeconds = input.value * 60;
					break;
				case 'seconds':
					totalInSeconds = input.value;
					break;
			}

			days.value = totalInSeconds / 3600 / 24;
			hours.value = totalInSeconds / 3600;
			minutes.value = totalInSeconds / 60;
			seconds.value = totalInSeconds;
		}
	});
}