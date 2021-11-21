import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const  maxLength10= maxLengthCreator(10)

const MyPosts = React.memo(props => {
    let posts_elements = props.posts.map((p) => (
        <Post massage={p.massage} likesCount={p.likes_count}/>
    ));
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>{posts_elements}</div>
        </div>
    );
})

let AddNewPostForm = (props)=>{
  return(
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field name="newPostText" component={Textarea} validate={[required,maxLength10]} placeholder="Post massage"/>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
  )
}

let AddNewPostFormRedux=reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;
