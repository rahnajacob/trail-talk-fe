import { Link } from 'react-router-dom'

const NavBar = () => {
    return (<>
        <p><Link to='/posts'>Feed</Link></p>
        <p><Link to='/posts/post'>Create Post</Link></p>
        </>
    )
}

export default NavBar