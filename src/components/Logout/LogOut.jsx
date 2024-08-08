import './LogOut.css'

const LogOut = ({handleSignOut}) => {
    return (
        <div className='logout-flex'>
            <div className='lo-profile'>
            {/* <p>Profile</p> */}
            </div><div>
            <button onClick={() => handleSignOut()} className="sign-out-btn">Log out</button>
            </div>
        </div>
    )
}

export default LogOut