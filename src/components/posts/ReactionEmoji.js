import { ThumbsUp, ThumbsDown } from "react-feather";
import { useDispatch } from "react-redux";
import { reactions } from "./postSlice";

const ReactionEmoji = ({ post }) => {
  const dispatch = useDispatch();
  const reactionEmoji = {
    thumbsUp: "👍",
    thumbsDown: "👎",
  };

  return (
    <>
      {Object.entries(reactionEmoji)?.map(([name, emoji]) => {
        return (
          <>
            <button
              type="button"
              className="btn btn-success ms-2"
              key={name}
              onClick={() =>
                dispatch(reactions({ postId: post?.id, reaction: name }))
              }
            >
              {emoji}
              <span>{post?.reactions[name]}</span>
            </button>
          </>
        );
      })}
    </>
  );
};

export default ReactionEmoji;
