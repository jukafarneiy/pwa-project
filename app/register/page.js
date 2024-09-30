'use client' 

import { useState } from "react";
import { signUp } from "@/public/utils/firebase";


export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            await signUp(email, password);
            window.location.href = '/home';
            
        } catch (error) {
            setError(error.message);
        }
    }
    return(
        <div className="min-h-screen p-6">
            <h1> Registro </h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleRegister} className="mb-6">
                <input
                type="email"
                placeholder="E-mail"
                className="border p-2 mr-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <input
                type="password"
                placeholder="Senha"
                className="border p-2 mr-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <button className="bg-blue-500 text-white p-2 rounded" type="submit">Registrar-se</button>
            </form>
        </div>
    )
}