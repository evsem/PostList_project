import React from 'react'
import PostItem from '../PostItem/PostItem'
import classes from './PostList.module.css'

const PostList = () => {
  return (
    <div>
      <PostItem
        props_postItem={{ id: 1, title: 'JS', body: 'Programmig language' }}
      />
      <PostItem
        props_postItem={{ id: 2, title: 'Python', body: 'Programmig language' }}
      />
      <PostItem
        props_postItem={{ id: 3, title: 'Java', body: 'Programmig language' }}
      />
      <PostItem
        props_postItem={{ id: 4, title: 'Swift', body: 'Programmig language' }}
      />
      <PostItem
        props_postItem={{ id: 5, title: 'PHP', body: 'Programmig language' }}
      />
    </div>
  )
}

export default PostList
