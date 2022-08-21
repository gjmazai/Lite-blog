import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';


const FormPost = (props) => {

    const [posts, setPosts] = useState({
        title: '',
        body: ''
    });

    const addNewPost = (event) => {
        event.preventDefault();
        const newPost = {
            ...posts,
            id: Date.now()
        }
        props.createPost(newPost);
        setPosts({
            title: '',
            body: ''
        });
    }

    return (
        <form>
            <MyInput
                value={posts.title}
                type='text'
                placeholder='Название поста'
                onChange={e => setPosts({ ...posts, title: e.target.value })} />
            <MyInput
                value={posts.body}
                type='text'
                placeholder='Описание поста'
                onChange={e => setPosts({ ...posts, body: e.target.value })} />
            <MyButton onClick={addNewPost} text={'Опубликовать'} />
        </form>
    );
}

export default FormPost;