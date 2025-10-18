import React from 'react';

export const AcIcon = () => (
  <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <style>
      {`
        .ac-body { fill: #e5e7eb; }
        .ac-vent { fill: #9ca3af; }
        .ac-display { fill: #111827; }
        .fan-blade { fill: #4b5563; transform-origin: center; animation: spin 1s linear infinite; }
        .snowflake { fill: #38bdf8; animation: fall 4s linear infinite; opacity: 0; }
        .flake1 { animation-delay: 0s; }
        .flake2 { animation-delay: -1s; }
        .flake3 { animation-delay: -2s; }
        .flake4 { animation-delay: -3s; }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fall {
          0% { transform: translate(0, -10px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translate(20px, 60px); opacity: 0; }
        }
      `}
    </style>
    <g transform="translate(20, 40)">
      <rect className="ac-body" x="0" y="0" width="160" height="60" rx="5" />
      <rect className="ac-vent" x="15" y="45" width="130" height="10" rx="3" />
      <rect className="ac-display" x="120" y="10" width="30" height="15" rx="3" />
      <text x="125" y="22" fontFamily="monospace" fontSize="10" fill="#34d399">24°C</text>
      <g transform="translate(30, 25)">
        <g className="fan-blade">
          <rect x="-15" y="-2" width="30" height="4" rx="2" />
          <rect x="-2" y="-15" width="4" height="30" rx="2" />
        </g>
      </g>
    </g>
    <g transform="translate(60, 105)">
      <g className="snowflake flake1">
        <path d="M0 0 L0 8 M-4 4 L4 4 M-3 -3 L3 5 M-3 5 L3 -3" stroke="#38bdf8" strokeWidth="2" />
      </g>
      <g className="snowflake flake2" transform="translate(20, 0)">
         <path d="M0 0 L0 8 M-4 4 L4 4 M-3 -3 L3 5 M-3 5 L3 -3" stroke="#38bdf8" strokeWidth="2" />
      </g>
       <g className="snowflake flake3" transform="translate(40, 0)">
         <path d="M0 0 L0 8 M-4 4 L4 4 M-3 -3 L3 5 M-3 5 L3 -3" stroke="#38bdf8" strokeWidth="2" />
      </g>
       <g className="snowflake flake4" transform="translate(60, 0)">
         <path d="M0 0 L0 8 M-4 4 L4 4 M-3 -3 L3 5 M-3 5 L3 -3" stroke="#38bdf8" strokeWidth="2" />
      </g>
    </g>
  </svg>
);