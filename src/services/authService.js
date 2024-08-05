const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

const signOut = () => {
    localStorage.removeItem('token')
}



export {signOut, getUser, signUp, signIn}