import { connect, } from "react-redux";
import * as actions from "../../redux/Contacts/contacts-actions";
import s from "./Filter.module.css";

function Filter({ data, handler }) {
  return (
    <label className={s.label}>
      <p className={s.inputTitle}>Find</p>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={data}
        onChange={handler}
      ></input>
    </label>
  );
}

const mapStateToProps = (state) => ({
  data: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  handler: (e) => dispatch(actions.filter(e.target.value))
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);