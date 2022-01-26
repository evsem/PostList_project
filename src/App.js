import React, { useState } from 'react'
import './App.css'
import PostItem from './Components/PostItem/PostItem'
import PostList from './Components/PostList/PostList'

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Programming language' },
    { id: 2, title: 'Python', body: 'Programming language' },
    { id: 3, title: 'Swift', body: 'Programming language' },
    { id: 4, title: 'Java', body: 'Programming language' },
    { id: 5, title: 'PHP', body: 'Programming language' },
  ])
  return (
    <div className="App">
      <PostList posts={posts} />
    </div>
  )
}

export default App
