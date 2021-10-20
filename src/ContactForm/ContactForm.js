import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./ContactForm.module.css"




export default function ContactForm() {
    const [name, setName] = useState(() => { return JSON.parse(window.localStorage.getItem('name')) ?? ''; });
    const [number, setNumber] = useState(() => { return JSON.parse(window.localStorage.getItem('number')) ?? ''; });

    const handleChange = (e) => {
        const { name, value } = e.target;


        switch (name) {
            case 'name': setName(value);
                break;

            case 'number': setNumber(value);
                break;
            default: return
        }
        console.dir(e.target);
        // setName(e.target.value)
    };

    const submit = e => {
        e.preventDefault();
        // const { props, state } = this;
        // console.log(props);
        // props.handleSubmit(state);
        // this.resetForm();
    };


    const nameId = uuidv4();
    const numberId = uuidv4();
    return (<form className={s.form} onSubmit={submit}>
        <label className={s.label} htmlFor={nameId}>
            <p className={s.inputTitle}>Name</p>
            <input className={s.input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={name}
                id={nameId}
                onChange={handleChange}
            ></input>
        </label>
        <label className={s.label} htmlFor={numberId}>
            <p className={s.inputTitle}>Phone</p>
            <input className={s.input}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                value={number}
                id={numberId}
                onChange={handleChange}
            ></input>
        </label>
        <button className={s.addBtn} type="submit">Add contact</button>
    </form>
    )

}