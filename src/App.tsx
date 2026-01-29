import React from 'react';
import Counter from './Counter'; // import the Counter component

const App: React.FC = () => {
  return (
    <div>
      <h1>My Counter App</h1>
      <Counter /> {/* TypeScript ensures state is typed correctly */}
    </div>
  );
};

export default App;
