function stopwatch() {

	let time = 0;
	let startInterval;


	let startBtn = document.getElementById("startBtn");
	startBtn.addEventListener("click", start);

	let endBtn = document.getElementById("stopBtn");
	endBtn.addEventListener("click", stop);

	let timeElement = document.getElementById('time');

	function start(e) {
		timeElement.textContent = "00:00";
		time = 0;
		startInterval = setInterval(() => {
			time++;

			let minutes = Math.floor(time / 60).toFixed(0);
			let seconds = (time % 60).toFixed(0);
			let minutesToString = Number(minutes) < 10 ? "0" + minutes : minutes;
			let secondsToString = Number(seconds) < 10 ? "0" + seconds : seconds;

			timeElement.textContent = `${minutesToString}:${secondsToString}`;

		}, 1000);

		startBtn.disabled = true;
		endBtn.disabled = false;
	}


	function stop(e) {
		clearInterval(startInterval);

		endBtn.disabled = true;
		startBtn.disabled = false;
	}
}