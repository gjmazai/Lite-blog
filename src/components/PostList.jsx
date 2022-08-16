import PostItem from './PostItem';

const PostList = ({ post, title }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '15px' }}>
                {title}
            </h1>
            {post.map(post =>
                <PostItem post={post} key={post.id} />
            )}
        </div>
    );
}

export default PostList;