const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/posts`

const feed = async () => {
    try {
        const res = await fetch(`${BASE_URL}`, {
            headers: {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        return res.json()    
    } catch (error) {
        console.log(error)
    }
    
}

const latest = async () => {
    try {
        const res = await fetch(`${BASE_URL}/recent-posts`, {
            headers: {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        return res.json()    
    } catch (error) {
        console.log(error)
    }
    
}

const showPost = async (postID) => {
    try {
        const res = await fetch(`${BASE_URL}/${postID}`, {
            headers: {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        return res.json()    
    } catch (error) {
        console.log(error)
    }
} 

export {feed, latest, showPost}