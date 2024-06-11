import React, { Suspense } from "react";

export const LazyPage = (Component: React.ComponentType): JSX.Element => (
  <Suspense>
    <Component />
  </Suspense>
);
