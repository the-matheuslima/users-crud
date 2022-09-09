import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FormRequest } from '../../../types/form'

import { TbArrowsLeft } from "react-icons/tb";

import axios from 'axios'

function UpdateUser() {
    const defaultForm = {
        name: '',
        email: '',
        gender: '',
        status: ''
    }

    const [erros, setError] = useState(defaultForm)
    const [formFields, setformFields] = useState(defaultForm);

    const { state } = useLocation();
    const navigate = useNavigate();

    const { email, name, gender, status } = formFields;

    useEffect(() => {
        axios.get<FormRequest>(`http://localhost:3001/users/find/${state}`)
            .then((user) => setformFields(user.data))
            .catch((err) => console.log(err))
    }, [state])

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

        axios.put(`http://localhost:3001/users/update/${state}`, {
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
            <h2 className="form__title">Atualizar Usúario</h2>
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
                        <h4>Gênero</h4>

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
                <input type="submit" value='Atualizar usúario' className="form__btn-submit" onClick={(e) => handlerSubmitForm(e)} />

            </form>
        </section >
    );
}

export default UpdateUser;
