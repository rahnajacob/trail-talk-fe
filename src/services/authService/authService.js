const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

const getUser = () => {
    const token = localStorage.getItem('token')
    if (!token) return null
    const user = JSON.parse(atob(token.split('.')[1]))
    return user
}

const signUp = async (formData) => { //depends on sign up form
    try {
        const res = await fetch(`${BACKEND_URL}/users/sign-up`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        const resBody = await res.json()
        if (resBody.error) { throw new Error(resBody.error) }
        localStorage.setItem('token', resBody.token)
        return resBody
    } catch (error) {
        throw new Error({ error: error.message })
    }
}

const signIn = async (user) => { //where user is dependant on what the state is called in app.jsx 
    try {
        const res = await fetch(`${BACKEND_URL}/users/sign-in`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        const resBody = await res.json()
        if (resBody.error) { throw new Error(resBody.error) }
        if (resBody.token) {
            localStorage.setItem('token', resBody.token)
            const user = JSON.parse(atob(resBody.token.split('.')[1]))
            return user
        }
    } catch (error) {
        throw new Error({ error: error.message })
    }
}

const signOut = () => {
    localStorage.removeItem('token')
}

export { signOut, signIn, signUp, getUser }