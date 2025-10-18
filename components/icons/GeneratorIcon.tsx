import React from 'react';

export const GeneratorIcon = () => (
    <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>
            {`
            .gen-body { fill: #4b5563; }
            .gen-panel { fill: #d1d5db; }
            .gen-vent { fill: #374151; }
            .spark { stroke: #f59e0b; stroke-width: 4; stroke-linecap: round; animation: spark-anim 1s infinite alternate; }
            .spark1 { animation-delay: 0s; }
            .spark2 { animation-delay: -0.3s; }
            .spark3 { animation-delay: -0.6s; }
            .hum { animation: hum-anim 0.2s infinite linear; }
            @keyframes spark-anim {
                from { stroke-dasharray: 0 50; }
                to { stroke-dasharray: 50 50; }
            }
            @keyframes hum-anim {
                0% { transform: translate(0, 0); }
                25% { transform: translate(0.5px, -0.5px); }
                50% { transform: translate(0, 0); }
                75% { transform: translate(-0.5px, 0.5px); }
                100% { transform: translate(0, 0); }
            }
            `}
        </style>
        <g className="hum">
            <rect className="gen-body" x="20" y="40" width="160" height="90" rx="10" />
            <rect className="gen-panel" x="120" y="55" width="45" height="30" rx="3" />
            <circle fill="#ef4444" cx="155" cy="65" r="5" />
            <circle fill="#22c55e" cx="155" cy="78" r="3" />

            <g className="gen-vent">
                <rect x="35" y="55" width="70" height="8" />
                <rect x="35" y="70" width="70" height="8" />
                <rect x="35" y="85" width="70" height="8" />
                <rect x="35" y="100" width="70" height="8" />
            </g>
            <rect className="gen-body" x="80" y="25" width="40" height="15" rx="5"/>
        </g>
        <g>
            <path className="spark spark1" d="M100 25 L110 5 L130 20 L120 40" />
            <path className="spark spark2" d="M70 40 L60 20 L40 30 L50 50" />
            <path className="spark spark3" d="M150 130 L160 110 L180 120 L170 140" />
        </g>
    </svg>
);