import React, { useState } from 'react'

import './Login.css'
import api from '../service/api'
import logo from '../assets/logo.svg'

export default function Login({ history }) {
    const [username, setUsername] = useState('')

    async function hendleSubmit(event) {
        event.preventDefault()

        const response = await api.post('/devs', {
            username 
        })

        const { _id } = response.data



        history.push(`/dev/${_id}`)
    }

    return (
        <div className="login-container">
            <form onSubmit={hendleSubmit}>
                <img src={logo} alt="Tindev Logo"/>
                <input
                 placeholder="Digite seu usuário do GitHub"
                 value={username}
                 onChange={event => setUsername(event.target.value)}
                 />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
