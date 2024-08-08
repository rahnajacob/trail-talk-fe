const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/posts`

// const feed = async () => {
//     try {
//         const res = await fetch(`${BASE_URL}`, {
//             headers: {Authorization : `Bearer ${localStorage.getItem('token')}`}
//         })
//         return res.json()    
//     } catch (error) {
//         console.log(error)
//     }
    
// }
const feed = async (page , limit = 7) => {
    try {
        const res = await fetch(`${BASE_URL}?page=${page}&limit=${limit}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};


const latest = async () => {
    try {
        const res = await fetch(`${BASE_URL}/recent-posts`, {
            headers: {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
       return res.json()
        // console.log("latest res:",res)    
    } catch (error) {
        console.log(error)
    }
    
}

const showPost = async (postID) => {
    try {
        const res = await fetch(`${BASE_URL}/post/${postID}`, {
            headers: {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        console.log("postid", postID)
        console.log("res location", res)
         return res.json()    
       //console.log("res location2", res)
    } catch (error) {
        console.log(error)
    }
}

const createPost = async (postFormData) => {
    try {
        const res = await fetch(`${BASE_URL}/post` , {
            method: 'POST',
            headers: {Authorization : `Bearer ${localStorage.getItem('token')}`, 'Content-Type' : 'application/json'},
            body: JSON.stringify(postFormData)
        })
        const data = await res.json()
        console.log(data)
        return data   
    } catch (error) {
        console.log(error)
    }
}

const deletePost = async (postID) => {
    try {
        const res = await fetch(`${BASE_URL}/post/${postID}` , {
            method: 'DELETE',
            headers: {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const updatePost = async (postFormData, postID) => {
    try {
        const res = await fetch(`${BASE_URL}/post/${postID}` , {
            method: 'PUT',
            headers: {Authorization : `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json'},
            body: JSON.stringify(postFormData)
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const createComment = async (postID, commentFormData) => {
    try {
        const res = await fetch(`${BASE_URL}/post/${postID}/comment` , {
            method: 'POST',
            headers: {Authorization : `Bearer ${localStorage.getItem('token')}`, 'Content-Type' : 'application/json'},
            body: JSON.stringify(commentFormData)
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export {feed, latest, showPost, createPost, deletePost, updatePost, createComment}