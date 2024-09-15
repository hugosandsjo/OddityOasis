import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./DarkMode.css";

const DarkModeToggle = () => {
	const [darkMode, setDarkMode] = useState(false);

	const handleToggle = () => {
		setDarkMode((prev) => !prev);
	};

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
	}, [darkMode]);

	return (
		<button className="dark-mode-toggle" onClick={handleToggle}>
			<FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="2x" />
		</button>
	);
};

export default DarkModeToggle;
