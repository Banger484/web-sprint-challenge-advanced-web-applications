import axios from 'axios';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = (props) => {  

    const { push } = useHistory();
    useEffect(() => {
        const token = localStorage.getItem('token')
        const username = localStorage.getItem('username')

        axiosWithAuth()
            .post('/logout')
            .then(res => {
                localStorage.removeItem('token')
                localStorage.removeItem('username')
                push('/login')
            })
            .catch(err => {
                console.log(err)
            }) 
    }, [])
    
    
    return(<div></div>);
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.