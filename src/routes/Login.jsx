import React, { useState } from 'react';
import { LoginStyle } from '../css/LoginStyle';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar lógica de autenticação
        console.log('Login:', email, password);
    };

    return (
        <LoginStyle>
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>Email:</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label>Senha:</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit">Entrar</button>
                </form>
                <p>Não tem uma conta? <Link to="/register">Registre-se</Link></p>
            </div>
        </LoginStyle>
    );
};

export default Login;
