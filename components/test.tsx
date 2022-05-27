import React, { Suspense } from "react";

export type Props = React.DetailsHTMLAttributes<HTMLDivElement>;

export const Test: React.FunctionComponent<Props> = ({ ...props }) => {
  return (
    <Suspense fallback="loading...">
        <div>abc</div>
    </Suspense>
  );
};

