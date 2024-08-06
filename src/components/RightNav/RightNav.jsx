

const RightNav = ({ myPosts }) => {
    const firstThreePosts = myPosts.slice(0, 3);

    return (
        <>
            <h1>Posts</h1>
            {firstThreePosts.map((post, index) => (
                <div key={index}>
                    <p>{post.title}</p>
                    <p>{post.comments.length > 0 ? post.comments.length : 'No comments yet!'}</p>
                </div>
            ))}
        </>
    );
}


export default RightNav