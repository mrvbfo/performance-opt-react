import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

export default function LazyLoading() {
  return (
    <div>
      <h1>Welcome</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
