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
import * as postService from './services/postService'
import LogOut from './components/Logout/LogOut'

export const AuthedUserContext = createContext(null)

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [posts, setPosts] = useState([])
  const [myPosts, setMyPosts] = useState([])

  const handleSignOut = () => {
    authService.signOut()
    setUser(null)
  }
  //for feed
  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await postService.feed()
      console.log("post data:", postsData)
      setPosts(postsData)
    }
    if (user) fetchPosts()
  }, [user])

  const handleAddPost = async (postFormData) => {
    console.log(postFormData)
    const newPost = await postService.createPost(postFormData)
    console.log('handle add', newPost)
    setPosts([newPost, ...posts])
    console.log('handle add', posts)
  }

  const handleDeletePost = async (postID) => {
    const deletePost = await postService.deletePost(postID)
    setPosts(posts.filter((post) => post._id !== deletePost._id))
  }

  const handleUpdatePost = async (postFormData, postID) => {
    const updatedPost = await postService.updatePost(postFormData, postID)
    setPosts(posts.map((post) => (postID === post._id ? updatedPost : post)))
  }


  useEffect(() => {
    const fetchMyPosts = async () => {
      const myPostData = await postService.latest()
      console.log('latest posts,', fetchMyPosts)
      setMyPosts(myPostData)
    }
    if (user) fetchMyPosts()
  }, [user])

  return (
    <>
      {user ? (
        <>
          <RightNav myPosts={myPosts} />
          <NavBar />
          <LogOut handleSignOut={handleSignOut} />
          <Routes>
            <Route path='/posts' element={<Feed posts={posts} />} />
            <Route path='/posts/post' element={<CreateUpdatePost handleAddPost={handleAddPost}/>}/>
            <Route path='/posts/post/:postID' element={<CreateUpdatePost handleUpdatePost={handleUpdatePost}/>}/>
          </Routes>
        </>
      ) : (
        <>
          <LandingPage />
          <Routes>
            <Route path='/sign-up' element={<SignUp setUser={setUser} />} />
            <Route path='/sign-in' element={<SignIn setUser={setUser} />} />
          </Routes>
        </>
      )}
    </>
  )
}

export default App
