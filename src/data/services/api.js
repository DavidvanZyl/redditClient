import ky from 'ky';

export const http = ky.create({
  prefixUrl: "https://www.reddit.com/",
});
