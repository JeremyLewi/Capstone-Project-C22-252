import { ThemeConsumer } from "../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function ToggleTheme() {
	return (
		<ThemeConsumer>
			{({ theme, toggleTheme }) => {
				return (
					<button className="toggle-theme" onClick={toggleTheme}>
						{theme === "dark" ? <FaSun /> : <FaMoon />}
					</button>
				);
			}}
		</ThemeConsumer>
	);
}

export default ToggleTheme;
