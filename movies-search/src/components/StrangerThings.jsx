import React, { useState } from "react";
import { Search, Bell, Plus, Play } from "lucide-react";

const StrangerThings = () => {
  return (
    <svg xmlns="http://w3.org" viewBox="0 0 240 120" width="100%" height="100%">
  <defs>
    <filter id="whiteGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="1.5" result="blur1" />
      <feGaussianBlur stdDeviation="4" result="blur2" />
      <feMerge>
        <feMergeNode in="blur2" />
        <feMergeNode in="blur1" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <g fill="none" stroke="#ffffff" stroke-width="2" filter="url(#whiteGlow)">
    
    <path d="M 12,20 L 165,20 M 12,20 L 12,54 M 228,20 L 228,54" stroke-linecap="square" />
    
    <line x1="12" y1="94" x2="228" y2="94" stroke-width="2.5" />

    <text x="14" y="52" 
          font-family="'ITC Benguiat', 'Times New Roman', serif" 
          font-size="34" 
          font-weight="900" 
          letter-spacing="-0.5px">STRANGER</text>
          
    <text x="17" y="89" 
          font-family="'ITC Benguiat', 'Times New Roman', serif" 
          font-size="39" 
          font-weight="900" 
          letter-spacing="6px">THINGS</text>
  </g>
</svg>

  );
};

export default StrangerThings;
