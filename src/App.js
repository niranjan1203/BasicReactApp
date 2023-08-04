import React from 'react';
import './App.css';
import Card1 from './Card1';
import Card2 from './Card2';

function App() {
  return (
    <div className="App">
      <Card1
        name="Niranjan"
        age={19}
        location="Trichy"
      />
      <Card2
        name="Joseph Vijay Chandrasekhar"
        age={49} 
        movies={66}
        college="Loyola College,Chennai"
        awards="Kalaimaamani (1998),
        Honorary Doctorate Dr. M.G.R. Educational and Research Institute (2007),
        Best International Actor 2018 awarded in United Kingdom"
        profession="Actor,Singer"
        Fathersname="S.A.Chandrasekhar"
        Mothersname="Shoba Chandrasekhar"
      />

         
    </div>
  );
}

export default App;
