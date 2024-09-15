export const fetchActivity = async (type: string) => {
	let url = "https://bored.api.lewagon.com/api/activity";
	url += type ? `?type=${type}` : "";

	try {
		const response = await fetch(url);
		const data = await response.json();
		return data.activity;
	} catch (err) {
		console.error("Error fetching activity:", err);
		return null;
	}
};
