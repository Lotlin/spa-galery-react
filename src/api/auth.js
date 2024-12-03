import {
  ACCESS_KEY,
  API_URL_AUTH,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
} from './const.js';

export let urlAuth = new URL(API_URL_AUTH);

urlAuth.searchParams.append('client_id', ACCESS_KEY);
urlAuth.searchParams.append('redirect_uri', REDIRECT_URI);
urlAuth.searchParams.append('response_type', RESPONSE_TYPE);
urlAuth.searchParams.append('scope', SCOPE);

urlAuth = urlAuth.toString().replace(/%2B/g, '+');

// https://unsplash.com/oauth/authorize?client_id=_cJR0-3U0La1jkD3DK4bRj-B-dfsQWkGwNayVC32OZM&redirect_uri=https%3A%2F%2F192.168.0.4%3A3000&response_type=code&scope=public+read_user
