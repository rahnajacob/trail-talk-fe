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
            console.log(user)
            setUser(user)
            //navigate('/')//choose where to navigate to when signed in
        } catch (error) {
            updateMessage(error.message)
        }
    }

    return (
        <><div className='container-si'>
            <form className='form-si' onSubmit={handleSubmit}>
                <h1>Log In</h1>
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
                    <button>Log In</button>
                </div>
                <div>
                    <p>Don't have an account?</p>
                    <Link to="/sign-up">
                        <button>Sign Up</button>
                    </Link>
                </div>

            </form>
        </div>
        </>
    )
}

export default SignIn