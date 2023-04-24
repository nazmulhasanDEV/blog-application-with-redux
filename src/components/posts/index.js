import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { size } from "lodash";
import { posts } from "./postSlice";
import { allPosts } from "./postSlice";
import ReactionEmoji from "./ReactionEmoji";

const Posts = () => {
  const posts = useSelector(allPosts);
  return (
    <>
      <div className="row pt-5">
        <div className="col">
          <h2>All posts</h2>
        </div>
      </div>
      <div className="row mt-1 gy-5">
        {size(posts) ? (
          posts?.map((post) => {
            return (
              <div className="col-md-3">
                <div class="card" style={{ width: "100%" }}>
                  <img src={post.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{post?.title}</h5>
                    <p class="card-text">{post.content}</p>
                    <div className="pb-2">
                      <ReactionEmoji post={post} />
                    </div>
                    <a href="#" class="btn btn-primary">
                      Check details
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h3 className="text-center">No posts found</h3>
        )}
      </div>
    </>
  );
};

export default Posts;
