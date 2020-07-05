import { postInterface } from './posts';

export const commentsInterface = (data) => {
  return {
    post: postInterface(data[0].data.children[0]),
    comments: data[1].data.children
      .filter((comment) => comment.kind === "t1")
      .map((comment) => commentInterface(comment)),
  };
};

export const commentInterface = (comment) => ({
  author: comment.data.author,
  created: comment.data.created_utc,
  awards: comment.data.all_awardings,
  gilded: comment.data.gilded,
  ups: comment.data.ups,
  text: comment.data.body,
});
