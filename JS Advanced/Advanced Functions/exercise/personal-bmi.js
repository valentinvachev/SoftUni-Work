function objectConstructor(name, age, weight, height) {


	let person = {
		name,
		personalInfo: {
			age,
			weight,
			height,
		},
		BMI: calculateBMI(),
		status: statusDetermination(calculateBMI())
	};

	makeRecommendation();


	function makeRecommendation() {
		if (person.status.localeCompare('obese') === 0) {
			person.recommendation = 'admission required';
		}
	}

	function calculateBMI() {
		return Math.round(weight / ((height / 100) * (height / 100)));
	}


	function statusDetermination(BMI) {
		if (BMI < 18.5) {
			return 'underweight';
		} else if (BMI < 25) {
			return 'normal';
		} else if (BMI < 30) {
			return 'overweight';
		} else {
			return 'obese';
		}
	}

	return person;
}
