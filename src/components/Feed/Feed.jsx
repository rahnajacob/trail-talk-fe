import React, { useState, useEffect, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import * as postService from '../../services/postService'
import './Feed.css'

const Feed = ({ posts, setPosts }) => {
    //const [allPosts, setAllPosts] = useState(posts || []);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // useEffect(() => {
    //     if (posts.length > 0) setAllPosts(posts);
    // }, [posts]);

    const fetchMorePosts = async () => {
        try {
            const data = await postService.feed(page+1, 10);
            setPosts((prevPosts) => [...prevPosts, ...data.posts]);
            setPage(page + 1);
            if (data.posts.length === 0) setHasMore(false);
        } catch (error) {
            console.error(error);
        }
    };
    console.log('postcount', posts.length)
    console.log('unique posts', new Set(posts.map((post)=> post._id)).size)
    return ( 
        <div id="scrollableFeed" className="scrollable-container">
            <InfiniteScroll
                dataLength={posts.length}
                next={fetchMorePosts}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                scrollableTarget="scrollableFeed"
            >
                <section>
                    {posts.map((post) => (
                        <>
                        <Link className='unstyled-link-feed' key={post._id} to={`/posts/post/${post._id}`}>
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
                        </>

                    ))}
                </section>
            </InfiniteScroll>
        </div>
    );
};

export default Feed;
