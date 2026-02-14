import React, { useState } from "react";
import "./amor.css";

export default function Carta() {
  const [abierta, setAbierta] = useState(false);

  const decoraciones = ["❤️", "💖", "🌸", "🌹", "💗", "💕"];

  return (
    <div className="fondo">
      {/* Cosas cayendo */}
      <div className="lluvia">
        {decoraciones.map((item, i) => (
          <span key={i} style={{ left: `${Math.random() * 100}%`, animationDelay: `${i * 0.5}s` }}>
            {item}
          </span>
        ))}
      </div>

      {!abierta ? (
        <div className="carta-cerrada" onClick={() => setAbierta(true)}>
          <div className="sobre">
            <div className="tapa"></div>
            <div className="mensaje-sobre">Toca para abrir 💌</div>
          </div>
        </div>
      ) : (
        <div className="carta-abierta">
          <div className="corazones-arriba">
            <span>❤️</span>
            <span>💖</span>
            <span>💕</span>
          </div>

          <h2>¡Feliz Día de San Valentín!</h2>

          <p className="mensaje">
            Desde que llegaste a mi vida, todo se volvió más bonito, más brillante y más feliz.
            Eres mi sonrisa favorita, mi paz en los días difíciles y mi razón para creer en el amor.
            Gracias por existir… te quiero muchísimo 💖
          </p>

          <div className="decoraciones">
            <span>🌹</span>
            <span>🍫</span>
            <span>💌</span>
          </div>
        </div>
      )}
    </div>
  );
}
