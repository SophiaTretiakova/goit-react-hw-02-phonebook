export const Filter = ({ handleChange }) => {
  return (
    <div>
      <input
        id="outlined-basic"
        label="search"
        variant="outlined"
        onChange={handleChange}
        placeholder="Find contact by name"
      />
    </div>
  );
};
