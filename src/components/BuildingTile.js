function BuildingTile({
  id,
  name,
  location,
  price,
  description,
  category,
  capacity,
  format,
  isAvailable,
}) {
  return (
    <div className="building-tile col-4">
      <div building-thumbnail col-12>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h2>{price} €</h2>
        <h3>Sleeps {capacity}</h3>
        <h4>{format}</h4>
      </div>
    </div>
  );
}

export default BuildingTile;
