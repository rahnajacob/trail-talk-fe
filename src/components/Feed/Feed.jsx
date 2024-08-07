import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'

const Feed = (props) => {
    // const [posts, setPosts]
    // const [hasMore, setHasMore]
    // const [page, setPage]
    return (
        <section>
            {props.posts.map((post) => (
                <Link key={post._id} to={`/posts/post/${post._id}`}>
                    <div className='feedpost' key={post._id}>
                        <p>{post.author.username}: {post.title}</p>
                        <p>{post.body}</p>
                        <div className='feedpostimg'>
                            {post.images.slice(0, 3).map((image, index) => {
                                return (
                                    <div key={index}>
                                        <img src={image.img} alt={image.description} />
                                        <small>{image.description}</small>
                                    </div>
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