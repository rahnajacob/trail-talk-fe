import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import * as postService from '../../services/postService'
import Carousel from '../Carousel/Carousel'
import { AuthedUserContext } from '../../App.jsx'
import './ShowPost.css'

const ShowPost = (props) => {
    const [post, setPost] = useState(null)
    const { postID }  = useParams()
    const user = useContext(AuthedUserContext)
    useEffect(() => {
        const fetchPost = async () => {
            const postData = await postService.showPost(postID)
            setPost(postData)
        }
        fetchPost()
    }, [postID])
    if (!post) return <main> Loading... </main>
    return (
        <div className='showpost-container'>
        <section className='showpost-details'>
            <h3>{post.title} in {post.city}, {post.country}</h3>
            <h4>{post.author.username}</h4>
            <Carousel images={post.images} />
            <p>{post.body}</p>
            {user && post.author._id === user._id && (
                <>
                    <Link className='sh-button' to={`/posts/post/${post._id}/edit`}>Edit Post</Link>
                    <button className='sh-button' onClick={() => {props.handleDeletePost(postID)}}>Delete Post</button>
                </>)}                
        </section>
        </div>
    )
}

export default ShowPost