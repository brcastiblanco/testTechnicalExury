import { useEffect } from 'react';

const DiscoverUs = () => {
  useEffect(() => {
    document.title = 'Discover Us';
  }, []);

  return <div>Discover Us</div>;
};

export default DiscoverUs;
