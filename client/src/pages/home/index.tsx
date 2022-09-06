import React from "react";
import './style.scss';
import { TbEdit, TbTrash, TbUser } from 'react-icons/tb'

type Props = {};

function Home() {
    return (
        <main className="home">
            <section className="home__table">
                <button className="home__btn-adduser">
                    Add novo usúario <span className="home__btn-icon"><TbUser /></span>
                </button>
                <table className="home__table-box">
                    <thead className="home__table-thead">
                        <tr className="home__table-row">
                            <td className="home__table-content">Nome</td>
                            <td className="home__table-content">Email</td>
                            <td className="home__table-content">Genero</td>
                            <td className="home__table-content">status</td>
                            <td></td>
                            <td></td>

                        </tr>
                    </thead>

                    <tbody className="home__table-tbody">
                        <tr>
                            <td className="home__table-content">Matheus</td>
                            <td className="home__table-content">Matheus@gmail.com</td>
                            <td className="home__table-content">Masculino</td>
                            <td className="home__table-content">Ativo</td>
                            <td className="home__table-content"><button className="home__table-btn"><TbEdit /></button></td>
                            <td className="home__table-content"><button className="home__table-btn"><TbTrash /></button></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    );
}

export default Home;
