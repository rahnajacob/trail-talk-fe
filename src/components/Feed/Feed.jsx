import { Link } from 'react-router-dom'

const Feed = (props) => {
    return (
        <section>
            {props.posts.map((post) => {
                return (
                    <div className='feedpost' key={post._id}>
                        <p>{post.author.username}: {post.title}</p>
                        <p>{post.body}</p>
                        <div className='feedpostimg'>
                            {post.images.slice(0, 3).map((image, index) => {
                                return (
                                    <>
                                        <img src={image.img} alt={image.description} key={index}/>
                                        <small>{image.description}</small>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Feed