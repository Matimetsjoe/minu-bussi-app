"use client"; // 1. Lubame brauseris JavaScripti ja interaktiivsuse

import { useState } from "react"; // 2. Võtame kasutusele oleku hoidja

export default function BussiOtsing() {
  // 3. Lome oleku nimega "peatus". Alguses on see tühi tekst ""
  // setPeatus on funktsioon, millega me seda teksti hiljem muudame
  const [peatus, setPeatus] = useState("");

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Bussiaegade Otsing 🚌</h1>
      
      {/* 4. Sisendkast, mis muudab olekut iga kord, kui kasutaja trükib */}
      <input 
        type="text" 
        placeholder="Sisesta peatuse nimi..." 
        value={peatus}
        onChange={(e) => setPeatus(e.target.value)} // Püütakse kasutaja trükitud tekst
        style={{ padding: "10px", width: "250px", fontSize: "16px" }}
      />

      {/* 5. Kuvame reaalajas seda, mida kasutaja trükib */}
      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        {peatus ? (
          <p>Otsitakse graafikut peatusele: <strong>{peatus}</strong></p>
        ) : (
          <p>Palun sisesta mõni peatus.</p>
        )}
      </div>
    </div>
  );
}