import React, { useEffect, useState } from "react";
import { posts } from "./postSlice";
import { useSelector, useDispatch } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => console.log(state));
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div class="card" style={{ width: "100%" }}>
            <img src="" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
