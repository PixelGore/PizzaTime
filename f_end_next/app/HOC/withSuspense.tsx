import React, { ComponentType, Suspense } from "react";
import Loading from "@/app/loading";

export function withSuspense<WCP>(WrappedComponent: ComponentType<WCP>) {
  return function WrappedComponentWithSuspense(props: WCP) {
    return (
      <Suspense fallback={<Loading />}>
        {/* @ts-ignore */}
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
}
