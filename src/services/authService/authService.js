const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

const getUser = () => {
    return user
}

const signUp = async () => {
    try {
        return()
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const signIn = async () => {
    try {
        return ()
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const signOut = () =>{
    localStorage.removeItem('token')
}

export {signOut, signIn, signUp, getUser}