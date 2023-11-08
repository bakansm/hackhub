export default function getCurrentDate() {
	// Create a JavaScript Date object
	const currentDate = new Date();

	// Get the year, month, day, hours, and minutes
	const year = currentDate.getFullYear();
	const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Add 1 to the month because it's zero-based
	const day = currentDate.getDate().toString().padStart(2, '0');
	const hours = currentDate.getHours().toString().padStart(2, '0');
	const minutes = currentDate.getMinutes().toString().padStart(2, '0');

	// Create the formatted string
	const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;

	return formattedDate;
}
