import { useEffect } from 'react';

function useResize(callBack) {
  useEffect(() => {
    window.addEventListener('resize', callBack);
  }, [callBack]);
}

export default useResize;
