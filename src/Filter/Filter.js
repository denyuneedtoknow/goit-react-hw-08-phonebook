export default function Filter({ data, handler }) {
  return (
    <label>
      Find
      <input type="text" name="filter" value={data} onChange={handler}></input>
    </label>
  );
}
