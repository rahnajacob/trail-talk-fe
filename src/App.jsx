import { useState, createContext, useEffect } from 'react'
import Carousel from './components/Carousel/Carousel'
import CreateUpdatePost from './components/CreateUpdatePost/CreateUpdatePost'
import Feed from './components/Feed/Feed'
import NavBar from './components/NavBar/NavBar'
import RightNav from './components/RightNav/RightNav'
import SearchBar from './components/SearchBar/SearchBar'
import ShowPost from './components/ShowPost/ShowPost'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import * as authService from './services/authService/authService'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'

export const AuthedUserContext = createContext(null)

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [posts, setPosts] = useState([])
  
  const handleSignOut = () => {
    authService.signOut()
    setUser(null)
  }
  
  return (
    <>
    <NavBar />
    <LandingPage />

    <Routes>
      <Route path="/sign-up" element={<SignUp setUser={setUser}/>}/>
      <Route path="/sign-in" element={<SignIn setUser={setUser}/>} />
    </Routes>
    </>
  )
}

export default App
