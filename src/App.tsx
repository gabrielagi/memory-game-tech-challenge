import React from 'react';
import Table from '@/components/Table';

const App: React.FC = () => {
  return (
    <div className="app h-screen w-screen bg-cover bg-center" style={{ backgroundImage: 'url(src/assets/blue-board-background.jpg)' }}>
      <h1 className="text-4xl font-bold text-white py-10 text-center">Memory Game</h1>
      <Table />
    </div>
  );
};

export default App;
