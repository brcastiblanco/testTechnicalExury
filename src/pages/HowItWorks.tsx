import { useEffect } from 'react';

const HowItWorks = () => {
  useEffect(() => {
    document.title = 'How It Works';
  }, []);

  return <div>How It Works</div>;
};

export default HowItWorks;
