import React from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '../providers/userApi';
import { useEffect, useState } from 'react';
import styles from '../styles/DashBoard.module.css';
function DashBoard() {
    const user = useSelector((state) => state.user.userLogged);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const userList = await getUsers();
            setUsers(userList);
        };
        fetchUsers();
    }, []);

    return (
        <div className={styles.dashboardContainer}>
            <h1 className={styles.dashboardTitle}>Dashboard</h1>
            <p>Bem-vindo à área logada!</p>
            <div className={styles.dashboardBox}>
                {user && (
                    <>
                        <strong>Usuário:</strong>
                        <pre className={styles.userInfo}>{JSON.stringify(user, null, 2)}</pre>
                    </>
                )}
                <div style={{ marginTop: 20 }}>
                    <h2 className={styles.userListTitle}>Lista de Usuários</h2>
                    {users.length > 0 ? (
                        <ul>
                            {users.map((usr) => (
                                <li key={usr.id}>{usr.name} - {usr.email}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>Nenhum usuário encontrado.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DashBoard;
