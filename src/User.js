import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

            // const response = await axios.get(`https://api.designartproject.ru/comments/${id}`);

            setUser(response.data);
            setLoading(false);
        };
        fetchUser();
    }, [id]);

    if (loading) return <Loader />;

    return (
        <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Телефон: {user.phone}</p>
        </div>
    );
};

export default User;