const App = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Adopt Me!"),
		React.createElement(Pet, { name: "Rudy", animal: "dog", breed: "corgi" }),
		React.createElement(Pet, { name: "Nino", animal: "cat", breed: "persian" }),
		React.createElement(Pet, { name: "Toni", animal: "cat", breed: "persian" }),
	]);
};

const Pet = (props) => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, props.name),
		React.createElement("h2", {}, props.animal),
		React.createElement("h2", {}, props.breed),
	]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
