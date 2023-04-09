const setAccessToken = (token) => {
  localStorage.setItem('access_token', JSON.stringify(token));
};

export { setAccessToken };
