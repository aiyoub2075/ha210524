import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Funktion zur Addition zweier Zahlen
const add = (a, b) => a + b;

// Funktion zur Berechnung der Quadratwurzel einer Zahl
const sqrt = (x) => Math.sqrt(x);

// Generiere eine zufällige Zahl zwischen 1 und 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Hole das aktuelle Datum
const currentDate = new Date().toLocaleDateString();

const App = () => (
  <div>
    <h1 className="kopftext">Aiyoub Hausaufgabe 21.May</h1>
    <p className="paragraf">bla bla bla bla bla bla bla bla</p>
    
    <h3 style={{ color: 'black', fontSize: '50px' }}>
      Addieren von 10 und 20 = {add(10, 20)}
    </h3>
    
    <h3 style={{ color: 'green', fontSize: '40px' }}>
      Quadratwurzel von 16: {sqrt(16)}
    </h3>
    
    <p style={{ color: 'black', fontSize: '30px' }}>
      Zufällige Zahl zwischen 1 und 100: {randomNumber}
    </p>
    
    <p style={{ color: 'green', fontSize: '20px' }}>
      Aktuelles Datum: {currentDate}
    </p>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
