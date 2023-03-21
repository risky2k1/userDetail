import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDetail = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`/api/user`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    if (!user) {
        return <div>Loading...</div>;
    }
    return (
        <div className="text-white text-center">
            <h1>User Detail</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default UserDetail;
