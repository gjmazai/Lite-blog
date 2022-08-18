import PostItem from './PostItem';

const PostList = ({ post, title, removePost }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '15px' }}>
                {title}
            </h1>
            {post.map((post, index) =>
                <PostItem removePost={removePost} number={index + 1} post={post} key={post.id} />
            )}
        </div>
    );
}

export default PostList;