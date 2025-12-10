import React, { useState } from 'react';
import { WelcomeScreen } from './screen/homepage';
import DashboardScreen from './screen/dashboard';
import './App.css';

function App() {
  const [petName, setPetName] = useState<string | null>(null);
  const [petType, setPetType] = useState<string | null>(null);

  const handleStart = (name: string, type: string) => {
    setPetName(name);
    setPetType(type);
    return true;
  };

  return (
    <div className="App">
      {petName && petType ? (
        <DashboardScreen petName={petName} petType={petType} />
      ) : (
        <WelcomeScreen onStart={handleStart} />
      )}
    </div>
  );
}

export default App;
