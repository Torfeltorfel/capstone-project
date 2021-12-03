import React from 'react';

export default function ArrowIcon(
  props: React.SVGProps<SVGPathElement>
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="rgba(184, 197, 172, 1.5)"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
        {...props}
      />
    </svg>
  );
}
