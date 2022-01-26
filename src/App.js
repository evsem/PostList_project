import React from 'react'
import './App.css'
import PostItem from './Components/PostItem/PostItem'

function App() {
  return (
    <div className="App">
      <PostItem
        props_postItem={{ id: 1, title: 'JS', body: 'Programming language' }}
      />
    </div>
  )
}

export default App
