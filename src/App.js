import React, { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
  const [post, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Discription' },
    { id: 2, title: 'Python', body: 'Discription' },
    { id: 3, title: 'C++', body: 'Discription' },
    { id: 4, title: 'C#', body: 'Discription' },
    { id: 5, title: 'Rust', body: 'Discription' },
  ])

  const addNewPost = () => {

  }

  return (
    <div>
      <form>
        <MyInput type='text' placeholder='Название поста' />
        <MyInput type='text' placeholder='Описание поста' />
        <MyButton text={'Создать пост'} />
      </form>
      <PostList post={post} title={'Список постов 1'} />
    </div >
  );
}

export default App;
