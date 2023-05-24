import { useEffect } from 'react';
import { useState } from 'react';

const useResize = () => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setPageWidth(window.innerWidth));

    return () =>
      window.removeEventListener("resize", () =>
        setPageWidth(window.innerWidth)
      );
  }, []);
  return pageWidth
}

export default useResize
