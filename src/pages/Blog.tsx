import { useEffect } from 'react';

const Blog = () => {
  useEffect(() => {
    document.title = 'Blog';
  }, []);

  return <div>Blog</div>;
};

export default Blog;
