import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (<>
        <div className='nav-flex'>
            <p><Link className='unstyled-link' to='#'>Profile</Link></p>
            <p><Link className='unstyled-link' to='/posts/post'>Create Post</Link></p>
            <p><Link className='unstyled-link' to='/posts'>Feed</Link></p>            
            <p><Link className='unstyled-link' to='#'>Memories</Link></p>
            <p><Link className='unstyled-link' to='#'>Friends</Link></p>
            <p><Link className='unstyled-link' to='#'></Link></p>
        </div>
        </>
    )
}

export default NavBar