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

export const fetchFact = async (type: string, lang = "en") => {
	let url = `https://uselessfacts.jsph.pl/${type}.json?language=${lang}`;
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data.text;
	} catch (err) {
		console.error("Error fetching fact:", err);
		return null;
	}
};
