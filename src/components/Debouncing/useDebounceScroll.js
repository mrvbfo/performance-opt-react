import { useState, useEffect } from "react";
import useDebounce from "./useDebounce"; 

/**
 * useDebounceScroll
 * window scrollY değerini debounce ederek verir.
 *
 * @param {number} delay - debounce süresi (ms)
 * @returns {number} debounced scrollY
 */
const useDebounceScroll = (delay = 200) => {
  const [rawScrollY, setRawScrollY] = useState(0);
  const debouncedScrollY = useDebounce(rawScrollY, delay);

  useEffect(() => {
    const handleScroll = () => {
      setRawScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return debouncedScrollY;
};

export default useDebounceScroll;
