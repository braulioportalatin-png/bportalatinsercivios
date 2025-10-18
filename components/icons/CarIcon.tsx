import React from 'react';

export const CarIcon = () => (
  <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <style>
      {`
        .car-body { fill: #3b82f6; }
        .car-window { fill: #bfdbfe; }
        .car-wheel { fill: #374151; }
        .car-light { fill: #fef08a; }
        .bubble { fill: #ffffff; opacity: 0.7; animation: float 6s ease-in-out infinite; }
        .bubble1 { animation-delay: 0s; }
        .bubble2 { animation-delay: -1s; }
        .bubble3 { animation-delay: -2s; }
        .bubble4 { animation-delay: -3s; }
        .bubble5 { animation-delay: -4s; }
        .sparkle { fill: #ffffff; animation: sparkle-anim 1.5s infinite; }
        .sparkle1 { animation-delay: 0s; }
        .sparkle2 { animation-delay: -0.5s; }
        .sparkle3 { animation-delay: -1s; }
        @keyframes float { 
          0% { transform: translateY(0px); opacity: 0.7; } 
          50% { transform: translateY(-30px); opacity: 0.3; }
          100% { transform: translateY(0px); opacity: 0.7; }
        }
        @keyframes sparkle-anim {
          0%, 100% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1); opacity: 1; }
        }
      `}
    </style>
    <g transform="translate(10, 20)">
      <path className="car-body" d="M170 80 H180 Q185 80 185 75 V60 Q185 55 180 55 H160 L140 30 H60 L40 55 H20 Q15 55 15 60 V75 Q15 80 20 80 H30 V90 Q30 100 40 100 H60 Q70 100 70 90 V80 H130 V90 Q130 100 140 100 H160 Q170 100 170 90 V80 Z" />
      <path className="car-window" d="M135 35 H65 L50 55 H150 Z" />
      <circle className="car-wheel" cx="50" cy="95" r="15" />
      <circle className="car-wheel" cx="150" cy="95" r="15" />
      <circle fill="#e5e7eb" cx="50" cy="95" r="5" />
      <circle fill="#e5e7eb" cx="150" cy="95" r="5" />
      <path className="car-light" d="M180 60 H184 V70 H180 Z" />
      <g className="sparkles">
        <path className="sparkle sparkle1" transform="translate(80 40) scale(0.8)" d="M10 0 L13 7 L20 10 L13 13 L10 20 L7 13 L0 10 L7 7 Z" />
        <path className="sparkle sparkle2" transform="translate(160 60)" d="M10 0 L13 7 L20 10 L13 13 L10 20 L7 13 L0 10 L7 7 Z" />
        <path className="sparkle sparkle3" transform="translate(20 70) scale(0.6)" d="M10 0 L13 7 L20 10 L13 13 L10 20 L7 13 L0 10 L7 7 Z" />
      </g>
    </g>
    <g className="bubbles">
      <circle className="bubble bubble1" cx="30" cy="40" r="8" />
      <circle className="bubble bubble2" cx="170" cy="30" r="12" />
      <circle className="bubble bubble3" cx="100" cy="15" r="6" />
      <circle className="bubble bubble4" cx="50" cy="10" r="10" />
      <circle className="bubble bubble5" cx="140" cy="20" r="7" />
    </g>
  </svg>
);