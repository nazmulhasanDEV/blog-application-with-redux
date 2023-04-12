import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { addNewPost } from "../posts/postSlice";
import { useDispatch, useSelector } from "react-redux";

const AddPost = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    id: nanoid(),
    title: "",
    content: "",
  });
  console.log(post);
  const onChangeHandler = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const addNewPostHandler = (event) => {
    event.preventDefault();

    dispatch(addNewPost(post));
  };

  return (
    <>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <div
            className="add-post-form mt-5"
            style={{
              boxShadow: "3px 3px 2px 3px rgba(0, 0, 0, 0.2)",
              padding: "15px",
            }}
          >
            <div>
              <h4>Add new post</h4>
            </div>
            <form onSubmit={addNewPostHandler}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Post title
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={onChangeHandler}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Post content
                </label>
                <textarea
                  name="content"
                  className="form-control"
                  placeholder="Post content"
                  onChange={onChangeHandler}
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </>
  );
};

export default AddPost;
