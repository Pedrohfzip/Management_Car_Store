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
        </div>
    );
}

export default DashBoard;
