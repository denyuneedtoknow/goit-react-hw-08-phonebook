import s from "./Filter.module.css"

export default function Filter({ data, handler }) {
  return (
    <label className={s.label}>
      <p className={s.inputTitle}>Find</p>
      <input className={s.input} type="text" name="filter" value={data} onChange={handler}></input>
    </label>
  );
}
