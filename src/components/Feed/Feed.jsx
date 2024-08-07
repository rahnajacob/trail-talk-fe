import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Feed = (props) => {
    return (
        <section>
            console.log(props)
            {props.posts.map((post) => (
                <Link key={post._id} to={`/posts/post/${post._id}`}>
                    <div className='feedpost'>
                        <p>{post.author.username}: {post.title}</p>
                        <p>{post.body}</p>
                        <div className='feedpostimg'>
                            {post.images.slice(0, 3).map((image, index) => {
                                return (
                                    <>
                                        <img src={image.img} alt={image.description} key={index} />
                                        <small>{image.description}</small>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </Link>
            ))}
        </section>
    )
}

export default Feed