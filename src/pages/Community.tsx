import { useEffect } from 'react';

const Community = () => {
  useEffect(() => {
    document.title = 'Community';
  }, []);

  return <div>Community</div>;
};

export default Community;
