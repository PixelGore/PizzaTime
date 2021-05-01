import { Suspense } from "react";
import PreLoader from "../Components/common/preloader/Preloader";

export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    return (props: WCP) => {
        return <Suspense fallback={<PreLoader />}>
            <WrappedComponent {...props} />
        </Suspense>
    }
}