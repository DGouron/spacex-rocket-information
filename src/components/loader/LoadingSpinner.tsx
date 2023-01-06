import React from "react";
import styles from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={styles.loading__spinner}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="300px"
        height="400px"
        viewBox="0 0 1262.000000 1280.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <metadata>
          Created by potrace 1.15, written by Peter Selinger 2001-2017
        </metadata>
        <g
          transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
          fill="black"
          stroke="none"
        >
          <path
            d="M12195 12794 c-342 -36 -447 -48 -600 -70 -1577 -224 -3000 -814
        -4299 -1782 -477 -356 -829 -664 -1336 -1172 -504 -504 -838 -876 -1318 -1471
        l-142 -176 -52 8 c-274 44 -626 69 -953 69 -611 0 -959 -80 -1280 -294 -506
        -339 -1001 -993 -1448 -1916 -252 -520 -513 -1167 -724 -1800 -41 -120 -45
        -141 -40 -197 11 -118 82 -219 186 -267 36 -16 64 -21 131 -20 83 1 94 4 535
        158 248 87 565 198 705 246 140 49 371 128 513 178 l259 89 1108 -1071 c610
        -589 1109 -1078 1109 -1086 1 -8 -126 -420 -280 -915 -309 -991 -309 -991
        -270 -1096 29 -75 88 -141 159 -176 49 -24 69 -28 137 -27 88 1 110 8 578 195
        1161 463 2033 941 2622 1436 237 199 494 484 628 696 131 206 206 440 242 751
        42 375 2 1046 -91 1511 l-16 79 39 36 c21 19 124 109 228 200 1597 1391 2651
        2714 3295 4135 460 1015 715 2064 791 3255 13 207 8 255 -33 333 -69 128 -193
        181 -383 161z"
          />
        </g>
      </svg>
    </div>
  );
}

export default LoadingSpinner;
