import React from "react";

type Props = {};

function UpdateUser({ }: Props) {
    return (
        <section className="form__create-user">
            <h2 className="form__title">Atualizar Usúario</h2>
            <form className="form">
                <div className="form__box">
                    <label >
                        Nome
                        <input type="text" placeholder="informe o nome" className="form__box-input" />
                    </label>
                </div>
                <div className="form__box">
                    <label >
                        Email
                        <input type="text" placeholder="informe o email" className="form__box-input" />
                    </label>
                </div>

                <div className="form__box-row">
                    <div className="form__box">
                        <h4>Gênero</h4>

                        <label className="form__box-label">
                            Masculino
                            <input type="radio" name="gender" className="form__box-inputRadio" />
                        </label>

                        <label className="form__box-label">
                            Feminino
                            <input type="radio" name="gender" className="form__box-inputRadio" />
                        </label>
                    </div>

                    <div className="form__box">
                        <h4>Status</h4>
                        <label className="form__box-label">
                            Ativo
                            <input type="radio" name="status" className="form__box-inputRadio" />
                        </label>

                        <label className="form__box-label">
                            Inativo
                            <input type="radio" name="status" className="form__box-inputRadio" />
                        </label>
                    </div>
                </div>
            </form>
            <button className="form__btn-submit">Atualizar usúario</button>
        </section>
    );
}

export default UpdateUser;
