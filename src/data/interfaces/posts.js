export const postsInterface = (data) => {
  return {
    before: data.before,
    after: data.after,
    count: data.dist,
    posts: data.children
      .filter((post) => !post.data.over_18 && !post.data.nsfw)
      .map((post) => postInterface(post)),
  };
};

export const postInterface = (post) => ({
  author: post.data.author,
  created: post.data.created_utc,
  awards: post.data.all_awardings,
  id: post.data.id,
  preview: {
    resolutions: post?.data?.preview?.images[0]?.resolutions,
    source: post?.data?.preview?.images[0]?.source,
  },
  url: post.data.url || null,
  title: post.data.title,
  ups: post.data.ups,
  commentTotal: post.data.num_comments,
});
