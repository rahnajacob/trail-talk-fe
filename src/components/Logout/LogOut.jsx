import './LogOut.css'

const LogOut = ({handleSignOut}) => {
    return (
        <button onClick={() => handleSignOut()} className="sign-out-btn">Log out</button>
    )
}

export default LogOut