import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';


const App = () => {
  return (
    <>
    <div className='max-w-6xl mx-auto '>
      <Header></Header>
      <Card></Card>
      <Questions></Questions>
    </div>
    </>
  );
};

export default App;