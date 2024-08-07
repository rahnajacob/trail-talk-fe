import './RightNav.css'

const RightNav = ({ myPosts }) => {
    const firstThreePosts = myPosts.slice(0, 3);

    return (
        <> 
            <div className="right-nav-container">
                <h1>Recent Posts</h1>
                <div className="right-nav-flex">
                {firstThreePosts.map((post, index) => (
                    <div key={index} className="right-nav-post">
                        <p>{post.title}</p>
                        <p>{post.comments.length > 0 ? post.comments.length : 'No comments yet!'}</p>
                        <p>{post.likes.length > 0 ? post.comments.length : 'No likes yet!'}</p>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}


export default RightNav