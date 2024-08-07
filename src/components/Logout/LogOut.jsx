import './LogOut.css'

const LogOut = ({handleSignOut}) => {
    return (
        <div className='logout-flex'>
            <button onClick={() => handleSignOut()} className="sign-out-btn">Log out</button>
        </div>
    )
}

export default LogOut