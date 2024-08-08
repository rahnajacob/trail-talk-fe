// import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
// import InfiniteScroll from 'react-infinite-scroll-component'

// const Feed = (props) => {
//     // const [posts, setPosts]
//     // const [hasMore, setHasMore]
//     // const [page, setPage]
//     return (
//         <section>
//             {props.posts.map((post) => (
//                 <Link key={post._id} to={`/posts/post/${post._id}`}>
//                     <div className='feedpost' key={post._id}>
//                         <p>{post.author.username}: {post.title}</p>
//                         <p>{post.body}</p>
//                         <div className='feedpostimg'>
//                             {post.images.slice(0, 3).map((image, index) => {
//                                 return (
//                                     <div key={index}>
//                                         <img src={image.img} alt={image.description} />
//                                         <small>{image.description}</small>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                 </Link>
//             ))}
//         </section>
//     )
// }

// export default Feed

import React, { useState, useEffect,  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import * as postService from '../../services/postService'
import './Feed.css'

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const nav = useNavigate()

    useEffect(() => {
        fetchPosts(page);
    }, [page]);

    const fetchPosts = async (page) => {
        try {
            const data = await postService.feed(page, 7); 
            setPosts((prevPosts) => [...prevPosts, ...data.posts]);
            if (page >= data.totalPages) {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
            setHasMore(false);
        }
    };

    const fetchMorePosts = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className='scrollable-container feed'>
        <InfiniteScroll
            dataLength={posts.length}
            next={fetchMorePosts}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more posts to show.</p>}
        >
            <section>
                {posts.map((post) => (
                    <Link key={post._id} to={`/posts/post/${post._id}`}>
                    <div className='feedpost' key={post._id}>
                        <p>{post.author.username}: {post.title}</p>
                        <p>{post.body}</p>
                        <div className='feedpostimg'>
                            {post.images.slice(0, 3).map((image) => (
                                <React.Fragment key={image.img}>
                                    <img src={image.img} alt={image.description} />
                                    <small>{image.description}</small>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    </Link>
                ))}
            </section>
        </InfiniteScroll>
        </div>
    );
};

export default Feed;
