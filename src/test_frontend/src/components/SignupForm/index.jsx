// SignupForm.js
import React, { useState } from 'react';
import axios from 'axios'; // Folosește axios sau altă librărie pentru a face cereri HTTP

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Trimite cererea de înregistrare către backend-ul Motoko
      const response = await axios.post('/api/register', {
        name: username, // Schimbăm "username" cu "name" pentru a se potrivi cu structura User din backend
        email: username, // Folosim "username" și pentru câmpul "email"
        age: 0, // Setăm o valoare implicită pentru vârstă (poți modifica asta)
        // accessLevel: { #user }, // Setăm nivelul de acces (poți modifica asta)
        createdAt: Date.now(), // Setăm data curentă ca moment de înregistrare
      });
      console.log('User registered successfully:', response.data);
      // Poți redirecționa utilizatorul către o pagină de autentificare sau altă destinație
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Register</button>
    </div>
  );
};

export default SignupForm;
