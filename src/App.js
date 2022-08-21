import React, { useEffect, useState } from 'react';
import PostService from './API/PostService';
import FormPost from './components/FormPost';
import PostFilter from './components/PostFilter';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import Loader from './components/UI/loading/Loader';
import MyModalWindow from './components/UI/modalWindow/MyModalWindow';
import { useFetching } from './hooks/useFetching';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';

function App() {

  const [posts, setPost] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPost(posts);
  })

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPost([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPost(posts.filter(el => el.id !== post.id));
  }

  return (
    <div>
      <MyButton text={'Запрос на сервер'} onClick={fetchPosts} />
      <MyButton onClick={() => setModal(true)} text={'Создать пользователя'} />
      <MyModalWindow visible={modal} setVisible={setModal}>
        <FormPost post={posts} createPost={createPost} />
      </MyModalWindow>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>}
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
        : <PostList removePost={removePost} post={sortedAndSearchPosts} title={'Список постов'} />
      }
    </div >
  );
}

export default App;
