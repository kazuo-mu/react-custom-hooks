import { useState } from 'react';
function useToggle(initialVal = false) {
  const [state, useState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
}
export default useToogle;

// usage
const [isHappy, toggleIsHappy] = useToggle(false);
