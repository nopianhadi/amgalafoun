
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock authentication
        if (email === 'admin@startupdesa.com' && password === 'password123') {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/admin');
        } else {
            setError('Email or password incorrect.');
        }
    };

    return (
        <div className="bg-light-gray-bg flex items-center justify-center min-h-screen -mt-16">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-google border border-border-gray">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-primary-text tracking-tight">Admin Login</h1>
                    <p className="mt-2 text-secondary-text">Please sign in to manage content.</p>
                </div>

                <div className="p-4 bg-light-gray-bg rounded-lg border border-border-gray text-sm text-center">
                    <p className="font-medium text-secondary-text">For demonstration purposes, you can use:</p>
                    <div className="mt-2 text-primary-text space-y-1">
                        <p>
                            <span className="font-semibold">Email:</span> 
                            <code className="ml-2 font-mono bg-gray-200 text-gray-800 px-2 py-1 rounded-md">admin@startupdesa.com</code>
                        </p>
                        <p>
                            <span className="font-semibold">Password:</span> 
                            <code className="ml-2 font-mono bg-gray-200 text-gray-800 px-2 py-1 rounded-md">password123</code>
                        </p>
                    </div>
                </div>

                <form className="space-y-6" onSubmit={handleLogin}>
                    {error && <p className="text-red-500 text-center text-sm">{error}</p>}
                    <div className="rounded-md -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full px-4 py-3 rounded-t-lg border border-border-gray focus:outline-none focus:ring-2 focus:ring-primary-navy/50 focus:border-primary-navy transition-shadow bg-white/70"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="w-full px-4 py-3 rounded-b-lg border border-border-gray focus:outline-none focus:ring-2 focus:ring-primary-navy/50 focus:border-primary-navy transition-shadow bg-white/70"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-primary-navy text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
