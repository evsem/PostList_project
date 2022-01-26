import React from 'react'
import PostItem from '../PostItem/PostItem'
import classes from './PostList.module.css'

const PostList = ({ posts }) => {
  return (
    <div className={classes.postList_wrapper}>
      <h2 className={classes.postList_title}>Post List</h2>
      {posts.map((post) => (
        //Мапим массив posts, выводим каждый элемент массива posts в виде post. Затем мы присваимваем компоненту PostItem пропс(props_postItem), в который прокидываем элемент post. Ключ присваиваем по id(он должен быть всегда уникальным).
        <PostItem props_postItem={post} key={posts.id} />
      ))}
    </div>
  )
}

export default PostList
