import { useEffect, useState } from 'react';

const useScroll = () => {
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => setScrollPos(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPos;
};

export default useScroll;
