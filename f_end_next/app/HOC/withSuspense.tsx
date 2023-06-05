import React, { ComponentType, Suspense } from "react";
import PreLoader from "../Components/common/preloader/Preloader";

export function withSuspense<WCP>(WrappedComponent: ComponentType<WCP>) {
  return (props: WCP) => {
    return (
      <Suspense fallback={<PreLoader />}>
        {/* @ts-ignore */}
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
}
