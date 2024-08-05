import { useState } from 'react'
import Carousel from './components/Carousel/Carousel'
import CreateUpdatePost from './components/CreateUpdatePost/CreateUpdatePost'
import Feed from './components/Feed/Feed'
import NavBar from './components/NavBar/NavBar'
import RightNav from './components/RightNav/RightNav'
import SearchBar from './components/SearchBar/SearchBar'
import ShowPost from './components/ShowPost/ShowPost'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
<<<<<<< HEAD
import LandingPage from './components/LandingPage/LandingPage'

const App = () => {
  return <LandingPage />
=======
import authService from './services/authService/authService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const handleSignOut = () => {
    authService.signOut()
    setUser(null)
  }
  return (
    <>
    <NavBar />
    <Routes>
    
    </Routes>
    </>
  )
>>>>>>> development
}

export default App
