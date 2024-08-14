import React from 'react';
import './index.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta

function App() {
  return (
    <div className="body">
      <header className="header">
        <h1>Portfolio de Daniel</h1>
      </header>
      <nav className="nav">
        <a href="https://www.instagram.com/dxt7788/" className="social-link" aria-label="Daniel's Instagram Profile">Instagram</a>
      </nav>
      <section className="content">
        <h2>Foto y Videos</h2>
        <ul className="info-list">
          <li>Nose qué poner acá</li>
        </ul>
        <main className="main-content">
          <div className="image-container">
            <img src="/fotos/IMG_8654.JPG" alt="Descripción de la imagen" />
            <div className="text-box">
              <p>Me ayudé con lo que anoté en mi cuaderno muejejej, tenía que hacerlo con REACT pero lo hice con HTML porque es más cómodo para mí muejejjeje</p>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default App;
