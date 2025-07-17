import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import MiddleSide from './components/middleSide/middleSide';
import Profile from './components/Profile/profile';
import Creat from './components/creat/creat';
import Search from './components/search/search';
import Register from './components/Register/Register';
import MainLayout from './components/Layout/MainLayout';
import Explore from './components/explore/explore';

function App() {

  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])

  const [isRegistered, setIsRegistered] = useState(
    localStorage.getItem('isRegistered') === 'true'
  )

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, [isRegistered]);

  const addPost = (newPost) => {
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {!isRegistered ? (
            <>
              <Route path="/" element={<Register setIsRegistered={setIsRegistered} />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <Route path="/" element={<MainLayout user={user} />}>
              <Route path="/home" element={<MiddleSide user={user} setIsRegistered={setIsRegistered} />} />
              <Route path="/search" element={<Search />} />
              <Route path="/create" element={<Creat addPost={addPost} user={user} />} />
              <Route path="/profile" element={user ? <Profile user={user} posts={posts} /> : <div>Loading...</div>} />
              <Route path="/explore" element={<Explore />} />
            </Route>
          )}
        </Routes>

      </div>
    </Router>
  );
}

export default App;
