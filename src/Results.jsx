import Pet from "./Pet";

const Results = ({ pets }) => {
	return (
		<div className="search">
			{!pets.length ? (
				<h1>No pets found</h1>
			) : (
				pets.map((pet) => (
					<Pet
						breed={pet.breed}
						id={pet.id}
						name={pet.name}
						animal={pet.animal}
						images={pet.images}
						location={`${pet.city}, ${pet.state}`}
						key={pet.id}
					/>
				))
			)}
		</div>
	);
};

export default Results;
