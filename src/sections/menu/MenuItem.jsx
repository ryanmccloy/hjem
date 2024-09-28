function MenuItem({ name, price }) {
  return (
    <div className="flex justify-between">
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}

export default MenuItem;
