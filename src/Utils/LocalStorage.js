

export const getPostsFromLocalStorage = () => {
  const savedPosts = localStorage.getItem('posts');
  return savedPosts ? JSON.parse(savedPosts) : [];
};

export const savePostsToLocalStorage = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts));
};
