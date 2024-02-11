import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const handleLogin = async () => {
        navigate(`/home`, {state: {loginName: username}})
    };

    return (
        <div>
            <h2>Login</h2>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
             </div>
            <button onClick={handleLogin}>login</button>
        </div>
    )
}

export default Login
