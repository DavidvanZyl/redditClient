import ky from 'ky/umd';

export const http = ky.create({
  prefixUrl: "https://www.reddit.com/",
});
