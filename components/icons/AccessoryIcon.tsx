import React from 'react';

export const AccessoryIcon = () => (
  <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <style>
      {`
        .tire { fill: #374151; stroke: #1f2937; stroke-width: 4; }
        .rim { fill: #d1d5db; }
        .lugnut { fill: #9ca3af; }
        .wrench { fill: #f59e0b; transform-origin: 100px 75px; animation: tighten 3s ease-in-out infinite; }
        @keyframes tighten {
          0%, 100% { transform: rotate(0deg) translateX(0); }
          20% { transform: rotate(-15deg) translateX(-10px); }
          40% { transform: rotate(10deg) translateX(5px); }
          60% { transform: rotate(-5deg) translateX(0); }
          80% { transform: rotate(0deg); }
        }
      `}
    </style>
    <g>
      <circle className="tire" cx="100" cy="75" r="60" />
      <circle className="rim" cx="100" cy="75" r="40" />
      <circle className="lugnut" cx="100" cy="50" r="5" />
      <circle className="lugnut" cx="125" cy="65" r="5" />
      <circle className="lugnut" cx="125" cy="85" r="5" />
      <circle className="lugnut" cx="100" cy="100" r="5" />
      <circle className="lugnut" cx="75" cy="85" r="5" />
      <circle className="lugnut" cx="75" cy="65" r="5" />
      <circle fill="#4b5563" cx="100" cy="75" r="15" />
    </g>
    <g className="wrench">
      <path d="M100 50 a5 5 0 0 1 0 -10 h20 l5 5 l-5 5 h-20" />
      <rect x="105" y="25" width="10" height="40" rx="3" />
    </g>
  </svg>
);