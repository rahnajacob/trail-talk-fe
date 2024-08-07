import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'
import * as authService from '../../services/authService/authService.js'

const SignUp = ({ setUser }) => {
    const navigate = useNavigate()
    const [eMessage, setEMessage] = useState([''])
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPass: ''
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
            const user = await authService.signUp(formData)
            setUser(user.user)
            navigate('/posts') //select forwarding after sign up/sign in
        } catch (error) {
            updateMessage(error.message)
        }
    }

    const { username, password, confirmPass } = formData;

    const isFormInvalid = () => {
        return !(username && password && password === confirmPass);
    };


    return (
        <>
        <div className='container-su'>
            <form className='form-su' onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
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
                <div>
                    <label htmlFor="confirmPass">Confirm Password:</label>
                    <input
                        type="password"
                        autoComplete="off"
                        id="confirmPass"
                        value={formData.confirmPass}
                        name="confirmPass"
                        onChange={handleChange}
                    />
                </div>
                <p>{eMessage}</p>
                <div>
                    <button className='button-su'disabled={isFormInvalid()}>Sign Up</button>
                </div>
                <div>
                    <p className='italic'>Have an account?</p>
                    <Link to="/sign-in">
                        <button className='sign-in-button button-su'>Sign In</button>
                    </Link>
                </div>

            </form>
        </div>
        </>
    )
}

export default SignUp