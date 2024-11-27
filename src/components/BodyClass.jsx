import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BodyClass = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Remove existing class names
    document.body.className = '';

    // Add class based on the current pathname
    const path = location.pathname;
    switch (path) {
      case '/':
        document.body.classList.add('home-page');
        break;
      case '/about':
        document.body.classList.add('about-page');
        break;
      case '/pricing':
        document.body.classList.add('pricing-page');
        break;
      case '/request-a-demo':
        document.body.classList.add('request-a-demo-page');
        break;
      default:
        document.body.classList.add('default-page');
    }
  }, [location]);

  return null; // This component does not need to render anything
};

export default BodyClass;
