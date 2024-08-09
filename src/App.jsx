import { useState, createContext, useEffect } from 'react'
import CreateUpdatePost from './components/CreateUpdatePost/CreateUpdatePost'
import Feed from './components/Feed/Feed'
import NavBar from './components/NavBar/NavBar'
import RightNav from './components/RightNav/RightNav'
import SearchBar from './components/SearchBar/SearchBar'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import * as authService from './services/authService/authService'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import * as postService from './services/postService'
import LogOut from './components/Logout/LogOut'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css'
import ShowPost from './components/ShowPost/ShowPost'
import Logo from './components/Logo/Logo'
import Badge from './components/Badge/Badge'



export const AuthedUserContext = createContext(null)

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [posts, setPosts] = useState([])
  const [myPosts, setMyPosts] = useState([])
  
  
  const navigate = useNavigate()

  const handleSignOut = () => {
    authService.signOut()
    setUser(null)
  }
  //for feed
  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await postService.feed()
      setPosts(postsData.posts)
    }
    if (user) {
      fetchPosts()
      navigate('/posts')
    }
  }, [user])

  const handleAddPost = async (postFormData) => {
    const newPost = await postService.createPost(postFormData)
    setPosts([newPost, ...posts])
    setMyPosts([newPost, ...posts])
    navigate('/posts')
  }

  const handleDeletePost = async (postID) => {
    const deletePost = await postService.deletePost(postID)
    setPosts(posts.filter((post) => post._id !== deletePost._id))
    navigate('/posts')
  }

  const handleUpdatePost = async (postFormData, postID) => {
    const updatedPost = await postService.updatePost(postFormData, postID)
    setPosts(posts.map((post) => (postID === post._id ? updatedPost : post)))
    navigate('/posts')
  }

  const handleAddComment = async (commentData) => {
    const newComment = await postService.createComment(commentData)
    setPosts({...posts, comments: [...posts.comments, newComment]})
    navigate('/posts')
  }

  useEffect(() => {
    const fetchMyPosts = async () => {
      const myPostData = await postService.latest()
      setMyPosts(myPostData)
    }
    if (user){
      fetchMyPosts()
    } 
  }, [user])

  return (
    <>
    <AuthedUserContext.Provider value={user}>
      {user ? (
        <>
          <Container>
            <Row>
              <Col xs={{span: 2}}><Badge /></Col>
              <Col xs={{span: 6}}><SearchBar /></Col>
              <Col xs={{span: 3, offset: -1}}><LogOut handleSignOut={handleSignOut} /></Col>
            </Row>
            <Row>
              <Col xs={{span: 2 }}><NavBar /></Col>
              <Col xs={{span: 6}}>
                <Routes>
                  <Route path='/posts' element={<Feed posts={posts} setPosts={setPosts}/>} />
                  <Route path='/posts/post' element={<CreateUpdatePost handleAddPost={handleAddPost} />} />
                  <Route path='/posts/post/:postID' element={<ShowPost handleDeletePost={handleDeletePost} />} />
                  <Route path='/posts/post/:postID/edit' element={<CreateUpdatePost handleUpdatePost={handleUpdatePost} />} />
                </Routes>
              </Col>
              <Col xs={{span: 3, offset: -1}}><RightNav myPosts={myPosts} /></Col>
            </Row>
          </Container>
        </>
      ) : (
        <>
          <LandingPage />
          <Container>
            <Row>
              <Col>
                <Logo />
              </Col>
              <Col>
                <Routes>
                  <Route path='/sign-up' element={<SignUp setUser={setUser} />} />
                  <Route path='/sign-in' element={<SignIn setUser={setUser} />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </AuthedUserContext.Provider>
  </>
  )
}

export default App
