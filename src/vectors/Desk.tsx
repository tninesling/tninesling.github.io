import React from 'react';
import { Box } from 'rebass';

const Desk = () => (
  <Box
    sx={{
      '@keyframes march': {
        to: {
          strokeDashoffset: 0,
        },
      },
      '& g#steam > line': {
        strokeDasharray: '6px 14.94px',
        strokeDashoffset: '20.94px',
        animation: 'march 5s linear infinite',
      },
      '& g#steam > line:nth-of-type(2n)': {
        strokeDasharray: '12px 8.94px',
      },
    }}
  >
    <svg width="922px" height="657px" viewBox="0 0 922 657.11">
      <defs>
        <radialGradient
          id="radial-gradient"
          cx="123.48"
          cy="223.39"
          r="36.06"
          gradientTransform="translate(72.68 -22.3) scale(0.92 1.17)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.15" stopColor="#ddd" />
          <stop offset="0.5" stopColor="#888" />
          <stop offset="1" />
        </radialGradient>
        <mask id="mask" x="149.13" y="203.36" width="74.63" height="72.72" maskUnits="userSpaceOnUse">
          <rect x="149.13" y="203.36" width="74.63" height="72.72" fill="url(#radial-gradient)" />
        </mask>
      </defs>
      <g>
        <g id="computer">
          <g id="monitor">
            <rect id="neck" x="551.66" y="260.42" width="66.34" height="42.94" rx="10.3" fill="#272c34" />
            <path
              id="screen"
              d="M794.9,0H376.61a23.26,23.26,0,0,0-23,23.34V245.48a23.26,23.26,0,0,0,23,23.34H794.9a23.26,23.26,0,0,0,23-23.34V23.34A23.26,23.26,0,0,0,794.9,0Zm13.82,245.48a13.94,13.94,0,0,1-13.82,14H376.61a13.94,13.94,0,0,1-13.82-14V23.34a13.93,13.93,0,0,1,13.82-14H794.9a13.93,13.93,0,0,1,13.82,14Z"
              fill="#272c34"
            />
            <rect id="base" x="485.33" y="295.02" width="199.01" height="16.8" rx="8.35" fill="#272c34" />
          </g>
          <g id="editor">
            <rect x="409.18" y="43.47" width="140.97" height="184.81" rx="10.19" fill="#3b424e" />
            <ellipse cx="418.97" cy="53.29" rx="1.63" ry="1.6" fill="#9e005d" />
            <ellipse cx="431.37" cy="53.29" rx="1.63" ry="1.6" fill="#39b54a" />
            <ellipse cx="425.5" cy="53.29" rx="1.63" ry="1.6" fill="#f7931e" />
            <line
              x1="426.8"
              y1="83.9"
              x2="467.92"
              y2="83.9"
              fill="none"
              stroke="#29abe2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3px"
            />
            <line
              x1="433.33"
              y1="96.09"
              x2="515.56"
              y2="96.09"
              fill="none"
              stroke="#29abe2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3px"
            />
            <line
              x1="427.45"
              y1="107.64"
              x2="474.44"
              y2="107.64"
              fill="none"
              stroke="#29abe2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3px"
            />
            <line
              x1="426.8"
              y1="124.97"
              x2="467.92"
              y2="124.97"
              fill="none"
              stroke="#29abe2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3px"
            />
            <line
              x1="433.33"
              y1="135.88"
              x2="480.32"
              y2="135.88"
              fill="none"
              stroke="#29abe2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3px"
            />
            <line
              x1="439.2"
              y1="148.07"
              x2="456.82"
              y2="148.07"
              fill="none"
              stroke="#29abe2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3px"
            />
            <line
              x1="426.8"
              y1="159.62"
              x2="450.3"
              y2="159.62"
              fill="none"
              stroke="#29abe2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3px"
            />
          </g>
          <g id="console">
            <rect x="613.09" y="127.3" width="149.03" height="100.98" rx="7.75" fill="#272c34" />
            <ellipse cx="620.57" cy="135.78" rx="1.25" ry="1.39" fill="#9e005d" />
            <ellipse cx="630.06" cy="135.78" rx="1.25" ry="1.39" fill="#39b54a" />
            <ellipse cx="625.57" cy="135.78" rx="1.25" ry="1.39" fill="#f7931e" />
            <line
              x1="630.25"
              y1="151.95"
              x2="661.69"
              y2="151.95"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3px"
            />
            <line
              x1="629.71"
              y1="162.48"
              x2="692.59"
              y2="162.48"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3px"
            />
            <line
              x1="629.83"
              y1="172.45"
              x2="665.76"
              y2="172.45"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3px"
            />
            <line
              x1="630.25"
              y1="193.95"
              x2="661.69"
              y2="193.95"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3px"
            />
            <line
              x1="629.71"
              y1="202.44"
              x2="671.17"
              y2="202.44"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3px"
            />
          </g>
        </g>
        <g id="desk">
          <path
            id="tabletop"
            d="M913.63,311.61H8.37A8.37,8.37,0,0,0,0,320v6.76a8.37,8.37,0,0,0,8.37,8.37H913.63a8.37,8.37,0,0,0,8.37-8.37V320A8.37,8.37,0,0,0,913.63,311.61Z"
            fill="#8d8d8d"
          />
          <path
            d="M849,335.11H38.44A2.45,2.45,0,0,0,36,337.56V639.67a17.44,17.44,0,0,0,17.44,17.44h0A18.56,18.56,0,0,0,72,638.55v-211a2.45,2.45,0,0,1,2.44-2.45H353a32,32,0,0,0,32-32V355.55a2.44,2.44,0,0,1,2.44-2.44H844.56a2.44,2.44,0,0,1,2.44,2.44V639.44a17.67,17.67,0,0,0,17.67,17.67h.18A18.16,18.16,0,0,0,883,639V337.56a2.45,2.45,0,0,0-2.44-2.45Z"
            fill="#272c34"
          />
        </g>
        <g id="steaming-mug">
          <g mask="url(#mask)">
            <g id="steam">
              <line
                x1="172.89"
                y1="252.8"
                x2="172.44"
                y2="228.52"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="5px"
              />
              <line
                x1="181.41"
                y1="244.7"
                x2="180.96"
                y2="220.42"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="5px"
              />
              <line
                x1="189.7"
                y1="236.3"
                x2="189.25"
                y2="212.02"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="5px"
              />
              <line
                x1="198"
                y1="253.1"
                x2="197.54"
                y2="228.82"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="5px"
              />
              <line
                x1="206.29"
                y1="244.7"
                x2="205.84"
                y2="220.42"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="5px"
              />
            </g>
          </g>
          <g id="mug">
            <path
              id="cup"
              d="M218.13,269.23a11.67,11.67,0,0,0-4.52-6,11.32,11.32,0,0,0-6.38-2H172.34a11.31,11.31,0,0,0-6.37,2,11.62,11.62,0,0,0-4.52,6l-.47.82a16.94,16.94,0,0,0-3.79-.43,16.65,16.65,0,1,0,3.56,32.9c.38.71.79,1.4,1.22,2.08a31.72,31.72,0,0,0,2.6,3.55,11.37,11.37,0,0,0,7.77,3.08h34.89a11.38,11.38,0,0,0,7.78-3.08,30.43,30.43,0,0,0,2.59-3.55,33.95,33.95,0,0,0,.53-35.37Zm-60.06,26.7a8.51,8.51,0,0,1-.88,0,9.71,9.71,0,0,1,0-19.42,8.43,8.43,0,0,1,1,.06,33.93,33.93,0,0,0-.13,19.32Z"
              fill="#272c34"
            />
            <path
              id="crown"
              d="M198.88,284.92l-2.18,7.58a.84.84,0,0,1-1,.57l-15.25-4.45a.84.84,0,0,1-.57-1L182,280a.83.83,0,0,1,1.44-.3l2.95,3.57a.84.84,0,0,0,1.21.09l2.48-2.28a.83.83,0,0,1,1.36.39l.9,3.27a.82.82,0,0,0,1,.57l4.4-1.43A.84.84,0,0,1,198.88,284.92Z"
              fill="#fff"
            />
          </g>
        </g>
      </g>
    </svg>
  </Box>
);

export default Desk;
