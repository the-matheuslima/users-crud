import React, { useEffect, useState } from "react";
import { TbEdit, TbTrash, TbUser } from 'react-icons/tb';
import axios from "axios";
import './style.scss';
import { Link, useNavigate } from "react-router-dom";

type UserRes = {
    email: string,
    gender: string,
    name: string,
    status: string
    __v: number
    _id: string
};

function Home() {
    const [users, setUsers] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/users').then((res) => setUsers(res.data)).catch(err => console.log(err)
        )
        console.log(users);
    }, [])


    const handlerDeleteUser = (id: string) => {
        alert('Tem certeza que deseja excluir este usuário?')
        axios.delete(`http://localhost:3001/users/delete/${id}`)
            .then(() => alert('Usuario deletado!'))
            .catch(err => console.log(err)
            )
    }

    const handlerEditUser = (id: string) => {
        navigator('/update', { state: id })
    }

    return (
        <main className="home">
            <section className="home__table">
                <Link to='/create'>
                    <button className="home__btn-adduser">
                        <span className="home__btn-icon">
                            Add novo usúario<TbUser />
                        </span>
                    </button>
                </Link>

                <table className="home__table-box">
                    <thead className="home__table-thead">
                        <tr className="home__table-row">
                            <td className="home__table-content">Nome</td>
                            <td className="home__table-content">Email</td>
                            <td className="home__table-content">Gênero</td>
                            <td className="home__table-content">status</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>

                    <tbody className="home__table-tbody">
                        {users.map((users: UserRes) => (
                            <tr key={users._id}>
                                <td className="home__table-content">{users.name}</td>
                                <td className="home__table-content">{users.email}</td>
                                <td className="home__table-content">{users.gender}</td>
                                <td className="home__table-content">{users.status}</td>
                                <td className="home__table-content" onClick={() => handlerEditUser(users._id)}><button className="home__table-btn"><TbEdit /></button></td>
                                <td className="home__table-content" onClick={() => handlerDeleteUser(users._id)}><button className="home__table-btn"><TbTrash /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </main>
    );
}

export default Home;
