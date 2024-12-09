import { useEffect, useState } from 'react';

export default function Keyboard({keyboardType}) {
  const [currentState, setCurrentState] = useState(1);
  const [movementUp, setMovementUp] = useState(null);
  const [movementLeft, setMovementLeft] = useState(null);

  useEffect(() => {
    if (keyboardType) {
      setMovementUp('z');
      setMovementLeft('q');
    } else {
      setMovementUp('w');
      setMovementLeft('a');
    }
  }, [keyboardType]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      if (currentState !== 1 && (key === movementUp || key === movementLeft || key === 's' || key === 'd' || key === 'arrowdown' || key === 'arrowleft' || key === 'arrowright' || key === 'arrowup')) {
        setCurrentState(1);
      } else if (currentState !== 2 && key === ' ') {
        setCurrentState(2);
      } else if (currentState !== 3 && key === 'c') {
        setCurrentState(3);
      } else if (currentState !== 4 && key === 'r') {
        setCurrentState(4);
      } else if (currentState !== 5 && key === 'p') {
        setCurrentState(5);
      } else if (currentState !== 6 && key === 'escape') {
        setCurrentState(6);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentState, movementUp, movementLeft]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src="../static/layout-kb.png" alt="Placeholder" style={{ marginBottom: '25vh' }} />
    </div>
  );
}
