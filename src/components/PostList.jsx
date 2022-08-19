import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({ post, title, removePost }) => {

    if (!post.length) {
        return (
            <h1 style={{ textAlign: 'center', margin: '20px' }}>
                Посты не были найдены
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '15px' }}>
                {title}
            </h1>
            <TransitionGroup>
                {post.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        classNames="post"
                        timeout={500}
                    >
                        <PostItem removePost={removePost} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
}

export default PostList;