import React, { useState } from "react";
import '../style.scss'
import axios from 'axios'
import validateForm from "../../../helpers/validateForm";
import { TbArrowsLeft } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

function CreateUser() {
    const defaultForm = {
        name: '',
        email: '',
        gender: '',
        status: ''
    }

    const [erros, setError] = useState(defaultForm)
    const [formFields, setformFields] = useState(defaultForm);
    const navigate = useNavigate();
    const { email, name, gender, status } = formFields;

    const formHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setformFields({ ...formFields, [name]: value })
    }

    const handlerSubmitForm = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        setError(defaultForm)

        if (!email.includes('@') || email === '') {
            return setError({
                ...erros,
                email: 'Por Favor insira o email corretamente',
            });
        }

        if (name === '') {
            return setError({ ...erros, name: 'Por favor insira o nome corretamente' });
        }

        if (gender === '') {
            return setError({ ...erros, gender: 'Por favor um genero' });
        }

        if (status === '') {
            return setError({ ...erros, status: 'Por favor um status' });
        }

        axios.post('http://localhost:3001/users/create', {
            name: name,
            email: email,
            gender: gender,
            status: status
        })
            .then(() => navigate('/'))
            .catch((err) => alert(err))
    }

    return (
        <section className="form__create-user">
            <Link to='/'>
                <button className="form__btn-back">
                    <span className="form__arrow-back"><TbArrowsLeft color="black" />Voltar</span>
                </button>
            </Link>

            <h2 className="form__title">Criar novo Us??ario</h2>
            <form className="form">
                <div className="form__box" >
                    <label>
                        Nome
                        <input type="text" name="name" placeholder="informe o nome" value={name} className="form__box-input" onChange={formHandler} />
                        <span className="form__error">{erros.name && erros.name}</span>
                    </label>
                </div>
                <div className="form__box">
                    <label>
                        Email
                        <input type="email" name="email" placeholder="informe o email" value={email} className="form__box-input" onChange={formHandler} />
                        <span className="form__error">{erros.email && erros.email}</span>
                    </label>
                </div>

                <div className="form__box-row">
                    <div className="form__box">
                        <h4>G??nero</h4>

                        <label className="form__box-label">
                            Masculino
                            <input type="radio" name="gender" onChange={formHandler} checked={gender === "masculino"} value='masculino' className="form__box-inputRadio" />
                        </label>

                        <label className="form__box-label">
                            Feminino
                            <input type="radio" name="gender" onChange={formHandler} checked={gender === "feminino"} value='feminino' className="form__box-inputRadio" />
                        </label>
                        <span className="form__error">{erros.gender && erros.gender}</span>

                    </div>

                    <div className="form__box">
                        <h4>Status</h4>
                        <label className="form__box-label">
                            Ativo
                            <input type="radio" name="status" value='ativo' checked={status === "ativo"} className="form__box-inputRadio" onChange={formHandler} />
                        </label>

                        <label className="form__box-label">
                            Inativo
                            <input type="radio" name="status" value='inativo' onChange={formHandler} checked={status === "inativo"} className="form__box-inputRadio" />
                        </label>
                        <span className="form__error">{erros.status && erros.status}</span>

                    </div>
                </div>
                {/* <input type="submit" value="" /> */}
                <input type="submit" value='Adicionar us??ario' className="form__btn-submit" onClick={(e) => handlerSubmitForm(e)} />
            </form>
        </section>
    );
}

export default CreateUser;
