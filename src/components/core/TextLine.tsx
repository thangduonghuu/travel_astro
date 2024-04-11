import React from 'react';
import '@/assets/sass/components/core/textLine.scss';

interface TextLineProps {
  text: string;
}

const TextLine: React.FC<TextLineProps> = ({ text }) => {
  return (
    <span className="text-line">
      {text}{' '}
      <svg
        className="text-line__underline"
        viewBox="0 0 177 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 14C107.5 -11 174.004 13.8467 175 14"
          stroke="url(#paint0_linear_1_6)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_6"
            x1="3"
            y1="0.385015"
            x2="176"
            y2="0.385015"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B427E6" />
            <stop offset="0.612116" stopColor="#844D98" />
            <stop offset="1" stopColor="#666666" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
};

export default TextLine;
