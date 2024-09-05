import React, { useEffect, useState } from 'react'

export default function useKey() {
  const [keyPressed , SetKeyPressed] = useState('Space');

  const handleKeyDown = (event) =>{
    if(event.key === ' '){
        SetKeyPressed('Space')
        console.log("Clicked on Space button");        
    } else if(event.key === 'Enter'){
        SetKeyPressed('Enter')
        console.log("Clicked on Enter button");
    }
  }

   useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    handleKeyPressAction();
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyPressAction = () => {
    if (keyPressed === 'Space') {
      console.log('Space key pressed');
    } else if (keyPressed === 'Enter') {
      console.log('Enter key pressed');
    }
  };

  return [keyPressed]
}
