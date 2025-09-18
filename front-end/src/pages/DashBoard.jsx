import React from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '../providers/userApi';
import { useEffect, useState } from 'react';
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
        <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
        }}>
        <h1 style={{ color: '#333', marginBottom: 24 }}>Dashboard</h1>
        <p>Bem-vindo à área logada!</p>
        <div style={{ marginTop: 20, padding: 20, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>

            {user && (
            <>
                <strong>Usuário:</strong>
                <pre style={{ wordBreak: 'break-all', background: '#f5f5f5', padding: 10, borderRadius: 8 }}>{JSON.stringify(user, null, 2)}</pre>
            </>
            )}
            <div style={{ marginTop: 20 }}>
                <h2 style={{ color: '#333', marginBottom: 16 }}>Lista de Usuários</h2>
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
    </div>);
}

export default DashBoard;
