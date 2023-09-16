import React, { useEffect, useState } from "react";
import "../style/index.css";
import { NavBar } from "./NavBar";
import { Route } from "react-router-dom";
import { AuthProvider } from "./Auth";
import { Routes } from "./Routes";
import { AuthProvider } from "./Auth";

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
        );
        const { results } = await response.json();
        setPokemon(results);
      } catch (err) {
        console.error(err);
      }
    };
    getAllData();
  }, []);

  return (
    <div>
      <p>Hello World</p>
      {!!pokemon.length &&
        pokemon.map((el, i) => {
          return (
            <div key={i}>
              <h1>{el.name}</h1>
            </div>
          );
        })}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
