import { http } from 'data/services/api';

export default class PostsService {
  static async getNPostsFromSub({
    NPosts,
    subReddit,
    lastPostFetched,
    totalFetched,
  }) {
    return http
      .get(
        `r/${subReddit}/top.json?raw_json=1&t=all&limit=${NPosts}
${lastPostFetched ? `&after=${lastPostFetched}` : ""}
${totalFetched ? `&count=${totalFetched}` : ""}
`
      )
      .json();
  }

  static async getPost({ subReddit, postId }) {
    return http
      .get(`r/${subReddit}/comments/${postId}.json?raw_json=1&depth=0&sort=top`)
      .json();
  }
}
