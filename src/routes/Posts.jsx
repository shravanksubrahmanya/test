import { Outlet } from 'react-router-dom';
import './App.css'

// custom components
import PostsList from '../components/PostsList'

function Posts() {
  return (
    <>
    <main>
      <PostsList />
    </main>
    </>
  );
}

export default Posts;
