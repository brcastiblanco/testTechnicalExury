import { useEffect } from 'react';

const FAQ = () => {
  useEffect(() => {
    document.title = 'FAQ';
  }, []);

  return <div>FAQ</div>;
};

export default FAQ;
