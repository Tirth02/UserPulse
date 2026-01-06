import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

const NotFoundRedirect = () => {

    const {user} = useAuth();

    if(user)
    {
        return <Navigate to="/" replace/>
    }
    return <Navigate to="/login" replace/>
}

export default NotFoundRedirect