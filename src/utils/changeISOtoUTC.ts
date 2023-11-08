export default function changeISOtoUTC(date: string) {
	const inputDate = new Date(date);
	const day = inputDate.getUTCDate();
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const month = monthNames[inputDate.getUTCMonth()];
	const year = inputDate.getUTCFullYear();
	const hours = inputDate.getUTCHours();
	const minutes = inputDate.getUTCMinutes();

	// Convert hours and minutes to GMT+7 time zone
	const gmt7Hours = hours + 7;
	const gmt7Minutes = minutes;

	// Format the date and time in the desired format
	const formattedDate = `${day} ${month} ${year}`;
	const formattedTime = `${gmt7Hours
		.toString()
		.padStart(2, '0')}:${gmt7Minutes.toString().padStart(2, '0')} AM GMT+7`;
	const formattedData = { date: formattedDate, time: formattedTime };
	return formattedData;
}
