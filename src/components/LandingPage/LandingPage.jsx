import { Link, useNavigate } from 'react-router-dom'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import { useEffect } from 'react'

const LandingPage = () => {
    const navigate = useNavigate()
    
    useEffect(() => {
        navigate('/sign-in')
    }, [])
    
    return <div className='landingpage'></div>
}

export default LandingPage