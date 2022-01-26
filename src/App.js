import React, { useState } from 'react'
import './App.css'
import PostItem from './Components/PostItem/PostItem'

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
      {posts.map((post) => (
        //Мапим массив posts, выводим каждый элемент массива posts в виде post. Затем мы присваимваем компоненту PostItem пропс(props_postItem), в который прокидываем элемент post. Ключ присваиваем по id(он должен быть всегда уникальным).
        <PostItem props_postItem={post} key={posts.id} />
      ))}
    </div>
  )
}

export default App
