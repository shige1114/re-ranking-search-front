import { useEffect,useState,useRef} from 'react';

const useArObserver = (id) => {
  const [isVisible, setIsVisible] = useState(false)
  const targetRef = useRef(null)
  useEffect(() => {
    const currentRef = targetRef.current
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true)
          // console.log('要素が表示されました:', entry.target);

          const storedIds = JSON.parse(localStorage.getItem('displayedids') || '[]');
          if (!storedIds.includes(id)) {
            storedIds.push(id);
            localStorage.setItem('displayedids', JSON.stringify(storedIds));
          }

        } else {
          // console.log('要素が表示されていません:', entry.target);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(callback, options);
    if (currentRef) {
      observer.observe(currentRef);
    }else{
      console.log("element not find",element)
    }

    // Observerをクリーンアップ
    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return targetRef
};

export default useArObserver