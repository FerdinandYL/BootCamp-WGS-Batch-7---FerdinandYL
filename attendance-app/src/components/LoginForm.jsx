import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {

        try {
        const response = await axios.post('http://localhost:3001/login', {
            email,
            password,
        });

        console.log(response.data);
        } catch (error) {
        console.error('Login failed', error.response.data);
        }
    };

    return(
        <div>
            <form>
                <label>Email : </label>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input><br/>
                <label>Password : </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br/>
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}