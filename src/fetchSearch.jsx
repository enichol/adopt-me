async function fetchSearch({ queryKey }) {
	const { animal, location, breed } = queryKey[1];

	const res = await fetch(
		`http://pets-v2.dev-apis.com/pets?animals=${animal}&location=${location}&breed=${breed}`
	);

	if (!res.ok) {
		throw new Error(
			`Search returned with ${res.status}: { ${animal}, ${breed}, ${location} }`
		);
	}

	return res.json();
}

export default fetchSearch;
