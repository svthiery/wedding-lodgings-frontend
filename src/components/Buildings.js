import BuildingTile from "./BuildingTile";

function Buildings({ buildings }) {
  const buildingsList = buildings.map((building) => {
    return (
      <BuildingTile
        key={building.id}
        id={building.id}
        name={building.name}
        location={building.location}
        price={building.price}
        description={building.description}
        category={building.category}
        capacity={building.capacity}
        format={building.format}
        isAvailable={building.is_available}
      />
    );
  });
  console.log(buildings);

  return (
    <div className="buildings main-homepage-section col-12">
      {buildingsList}
    </div>
  );
}

export default Buildings;
