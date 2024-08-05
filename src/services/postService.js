const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/posts`

const feed = async () => {
    try {
        const res = await fetch(`${BASE_URL}`, {
            headers: {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        return res.jason()    
    } catch (error) {
        console.log(error)
    }
    
}

export {feed}