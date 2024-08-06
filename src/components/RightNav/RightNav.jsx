

const RightNav = ({myPosts}) => {
    return (
        <>
        <h1></h1>
        {myPosts.map((post, index) => {
            return (
                <div key={index}>
                    <p >{post.title}</p>
                    <p>{post.comments.length > 0 ? post.comments.length: 'No comments yet!'}</p> 
                </div>
            )
        })}
        </>
    )
}

export default RightNav