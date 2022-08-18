import React, { useState } from 'react';
import FormPost from './components/FormPost';
import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';

function App() {

  const [posts, setPost] = useState([
    { id: 1, title: 'JavaScript', body: 'Discription 1' },
    { id: 2, title: 'Python', body: 'Discription 2' },
    { id: 3, title: 'C++', body: 'Discription 3' },
    { id: 4, title: 'C#', body: 'Discription 4' },
    { id: 5, title: 'Rust', body: 'Discription 5' },
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPost([...posts, newPost]);
  }

  const removePost = (post) => {
    setPost(posts.filter(el => el.id !== post.id))
  }

  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPost([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div>
      <FormPost post={posts} createPost={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPost}
          defaultValue='Сортировка по..'
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
        />
      </div>
      {posts.length
        ?
        <PostList removePost={removePost} post={posts} title={'Список постов'} />
        :
        <h1 style={{ textAlign: 'center', margin: '20px' }}>
          Посты не были найдены
        </h1>
      }
    </div >
  );
}

export default App;
