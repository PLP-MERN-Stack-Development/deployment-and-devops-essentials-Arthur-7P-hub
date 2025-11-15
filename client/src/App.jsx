import React from 'react';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <h1>MERN Testing App</h1>
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
    </div>
  );
};

export default App;
