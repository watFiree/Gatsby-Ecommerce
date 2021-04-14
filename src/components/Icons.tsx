import React from "react";

export const GithubIcon = ({ width = 36, height = 36, color = "white" }) => (
  <a href="https://github.com/watFiree">
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${width}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 31.5V26.25C22.5 24.75 22.65 24.15 21.75 23.25C25.95 22.8 30 21.15 30 14.25C29.9982 12.4574 29.2988 10.7359 28.05 9.44999C28.6357 7.89294 28.5818 6.16743 27.9 4.64999C27.9 4.64999 26.25 4.19999 22.65 6.59999C19.6009 5.80587 16.3991 5.80587 13.35 6.59999C9.75 4.19999 8.1 4.64999 8.1 4.64999C7.41822 6.16743 7.3643 7.89294 7.95 9.44999C6.70118 10.7359 6.00183 12.4574 6 14.25C6 21.15 10.05 22.8 14.25 23.25C13.35 24.15 13.35 25.05 13.5 26.25V31.5M13.5 28.5C7.05 30.6 7.05 24.75 4.5 24L13.5 28.5Z"
        stroke={color}
        stroke-width="2.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
);

export const LinkedinIcon = ({ width = 44, height = 44, color = "white" }) => (
  <a href="https://www.linkedin.com/in/karol-piotrowicz-1a13411a2/">
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${width}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33 7.33334H11C8.97494 7.33334 7.33331 8.97497 7.33331 11V33C7.33331 35.0251 8.97494 36.6667 11 36.6667H33C35.025 36.6667 36.6666 35.0251 36.6666 33V11C36.6666 8.97497 35.025 7.33334 33 7.33334Z"
        stroke="white"
        stroke-width="2.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.6667 20.1667V29.3333"
        stroke="white"
        stroke-width="2.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.6667 14.6667V14.685"
        stroke="white"
        stroke-width="2.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 29.3333V20.1667"
        stroke="white"
        stroke-width="2.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.3333 29.3333V23.8333C29.3333 22.8609 28.947 21.9282 28.2594 21.2406C27.5718 20.553 26.6391 20.1667 25.6667 20.1667C24.6942 20.1667 23.7616 20.553 23.0739 21.2406C22.3863 21.9282 22 22.8609 22 23.8333"
        stroke="white"
        stroke-width="2.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
);
