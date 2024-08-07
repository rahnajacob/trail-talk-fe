import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import * as postService from '../../services/postService'
import Carousel from '../Carousel/Carousel'
import { AuthedUserContext } from '../../App.jsx'

const ShowPost = (props) => {
    const [post, setPost] = useState(null)
    const user = useContext(AuthedUserContext)
    useEffect(() => {
        const fetchPost = async () => {
            const postData = await postService.showPost(postID)
            console.log("postdata:", postData)
            setPost(postData)
        }
        fetchPost()
    }, [postID])

    console.log(useParams)
    console.log("post state", post)
    if (!post) return <main> Loading... </main>
    return (
        <section className='showpost-details'>
            <h3>{post.title} in {post.city}, {post.country}</h3>
            <h4>{post.author}</h4>
            <Carousel images={post.images} />
            <p>{post.body}</p>
            {post.author._id === user._id && (
                <>
                    <button><Link to={`/posts/post/${post._id}`}>Edit Post</Link></button>
                    <button onClick={() => {props.handleDeletePost(postID)}}>Delete Post</button>
                </>)}
        </section>
    )
}

export default ShowPost