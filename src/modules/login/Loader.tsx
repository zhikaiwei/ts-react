import React from "react";
import { ErrorBoundary, Loading } from "../../components/app";

const Component = React.lazy(() =>
  import(/* webpackChunkName: "login" */ "./Page")
);

const Loader: React.FC = () => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<Loading />}>
        <Component />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default Loader;
