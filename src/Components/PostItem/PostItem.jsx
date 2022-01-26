import React from 'react'
import MyButton from '../../UI/Buttons/MyButton'
import classes from './PostItem.module.css'

const PostItem = (props) => {
  return (
    <div className={classes.postItem_wrapper}>
      <div className={classes.postItem_textContainer}>
        <h3 className={classes.postItem_textContainer__title}>
          {props.props_postItem.id}. {props.props_postItem.title}
        </h3>
        <p className={classes.postItem_textContainer__body}>
          {props.props_postItem.body}
        </p>
      </div>

      <MyButton>Delete</MyButton>
    </div>
  )
}

export default PostItem
