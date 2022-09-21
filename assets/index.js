const websiteAAPIE = 'https://event-shuttle.keolis.be/api/nl/bookings/configuration?eventId=28';
const website = 'https://www.event-shuttle.be/nl/RammsteinBrussels23-9028729d';

window.addEventListener('load', async () => {
	await checkWebsite(websiteAAPIE);
});

const checkWebsite = async (website) => {
	let result = await (await fetch(website)).json();
	if (result?.dates.length > 0) {
		const yes = document.getElementById('yes');
		const yesLink = document.getElementById('yes-link');
		const countDown = document.getElementById('countDown');
		yes.classList.toggle('hidden');
		yesLink.classList.toggle('hidden');
		countDownSeconds(countDown);
	} else {
		const no = document.getElementById('no');
		no.classList.toggle('hidden');
	}
};

const countDownSeconds = (countDown) => {
	let secondsTimeToCount = countDown.innerText - 1;
	setInterval(() => {
		countDown.innerText = secondsTimeToCount;
		if (secondsTimeToCount === 0) return (window.location.href = website);
		secondsTimeToCount--;
	}, 1000);
};
