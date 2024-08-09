import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignIn.css'
import * as authService from '../../services/authService/authService.js'

const SignIn = ({ setUser }) => {
    const navigate = useNavigate()
    const [eMessage, setEMessage] = useState([''])
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const updateMessage = (message) => {
        setEMessage(message)
    }

    const handleChange = (event) => {
        updateMessage('')
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const user = await authService.signIn(formData)
            setUser(user)
            navigate('/posts')
        } catch (error) {
            updateMessage(error.message)
        }
    }

    return (
        <>
        <div className='container-si'>
            <form className='form-si' onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        autoComplete="off"
                        id="username"
                        value={formData.username}
                        name="username"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        autoComplete="off"
                        id="password"
                        value={formData.password}
                        name="password"
                        onChange={handleChange}
                    />
                </div>
                <p>{eMessage}</p>
                <div>
                    <button className='button-si'>Sign In</button>
                </div>
                <div>
                    <p className='italic'>Don't have an account?</p>
                    <Link to="/sign-up">
                        <button className='sign-up-button-si button-si '>Sign Up</button>
                    </Link>
                </div>

            </form>
        </div>
        </>
    )
}

export default SignIn