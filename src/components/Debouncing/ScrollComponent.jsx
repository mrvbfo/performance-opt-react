import useDebounceScroll from "./useDebounceScroll";

const ScrollComponent = () => {
  const scrollY = useDebounceScroll(200); 

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      <h1>Debounced Scroll Y: {scrollY}</h1>
    </div>
  );
};

export default ScrollComponent;
