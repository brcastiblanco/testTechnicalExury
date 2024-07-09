import { useEffect } from 'react';

const Company = () => {
  useEffect(() => {
    document.title = 'Company';
  }, []);

  return <div>Company</div>;
};

export default Company;
