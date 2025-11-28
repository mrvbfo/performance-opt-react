import React, { useEffect, Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

// Preload the component
const preloadComponent = () => {
  import("./LazyComponent");
};

function App() {
  useEffect(() => {
    preloadComponent(); // Preload the component on app load
  }, []);

  return (
    <div>
      <h1>Welcome to My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;