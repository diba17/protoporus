import React from 'react';
import './LennyFaceBlink.css';
import { useState, useEffect } from 'react';

const lennyFaces = [
  "( ͡° ͜ʖ ͡°)",
  "( ͡~ ͜ʖ ͡°)",
  "( ͡ʘ ͜ʖ ͡ʘ)",
  "( ͡◉ ͜ʖ ͡◉)",
  "( ͡o ͜ʖ ͡o)",
  "( ͠° ͟ʖ ͡°)",
  "(ง ͠° ͟ل͜ ͡°)ง",
  "ᕦ( ͡° ͜ʖ ͡°)ᕤ",
  "༼ ͡° ͜ʖ ͡° ༽",
  "(✿ ͡° ͜ʖ ͡°)",
  "ʕ ͡° ʖ̯ ͡°ʔ",
  "( ͡ಠ ʖ̯ ͡ಠ)",
  "( ͡☉ ͜ʖ ͡☉)",
  "( ͡° ل͜ ͡°)",
  "( ͡° ᴥ ͡°)",
  "( ͡°益͡°)",
  "( ͡° ʖ̯ ͡°)",
  "( ͡~ ͜ʖ ͡°)ノ",
  "ヽ( ͡◕ ͜ʖ ͡◕)ﾉ",
  "(づ ͡° ͜ʖ ͡°)づ",
  "༼ʘ̚ل͜ʘ̚༽",
  
  "(ง •̀_•́)ง",
  "(ง’̀-‘́)ง",
 
  "( ͡° ͜V ͡°)",

  "ಠ⌣ಠ",
  "ಥ⌣ಥ",
 
];


export default function LennyFaceBlink() {
  
   const [face, setFace] = useState(lennyFaces[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomFace = lennyFaces[Math.floor(Math.random() * lennyFaces.length)];
      setFace(randomFace);
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval); // cleanup on unmount
    }, []);

  return (
    <span style={{ fontFamily: 'monospace', transition: 'opacity 0.3s ease', fontSize: '1.5rem', color: '#00ffc8' }}>
      {face} 
    </span>
  );

}


