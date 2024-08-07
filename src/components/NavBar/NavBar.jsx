import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (<>
        <div className='nav-flex'>
            <p><Link to='/posts'>Feed</Link></p>
            <p><Link to='/posts/post'>Create Post</Link></p>
        </div>
        </>
    )
}

export default NavBar