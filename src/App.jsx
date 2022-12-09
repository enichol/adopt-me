import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
	<div>
		<h1>Adopt Me!</h1>
		<Pet name="Rudy" animal="dog" breed="Corgi" />
		<Pet name="Nino" animal="cat" breed="Persian" />
		<Pet name="Toni" animal="cat" breed="Persian" />
	</div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
