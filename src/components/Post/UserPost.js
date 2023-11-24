import ViewPost from './ViewPost/ViewPost';

function UserPost({posts}) {
    return (
        <div className='postblogs-container'>
            {posts.map((post) => (
                <ViewPost post={post} key={post.id}/>
            ))}
        </div>
    );
}

export default UserPost;