import React from "react";
import "./index.css"; // Asegúrate de que el archivo CSS esté en la misma carpeta

function App() {
  const images = [
    { src: "public/fotos/IMG_8654.JPG", description: "Descripción 1" },
    { src: "public/fotos/IMG_8654.JPG", description: "Descripción 1" },
    { src: "public/fotos/IMG_8654.JPG", description: "Descripción 1" },
    { src: "public/fotos/IMG_8654.JPG", description: "Descripción 1" },
    { src: "public/fotos/IMG_8654.JPG", description: "Descripción 1" },
    { src: "public/fotos/IMG_8654.JPG", description: "Descripción 1" },
    { src: "public/fotos/IMG_8654.JPG", description: "Descripción 1" },
    { src: "public/fotos/IMG_8654.JPG", description: "Descripción 1" },
    { src: "public/fotos/IMG_8654.JPG", description: "Descripción 1" },
    { src: "public/fotos/IMG_8654.JPG", description: "Descripción 1" },
    { src: "public/fotos/IMG_8654.JPG", description: "Descripción 1" },
    { src: "public/fotos/IMG_8654.JPG", description: "Descripción 1" },
    { src: "public/fotos/IMG_8654.JPG", description: "Descripción 1" },
    { src: "public/fotos/IMG_8654.JPG", description: "Descripción 1" },
    { src: "public/fotos/IMG_8654.JPG", description: "Descripción 1" },
    { src: "public/fotos/IMG_8654.JPG", description: "Descripción 1" },
  ];

  return (
    <div className="body">
      <header className="header">
        <h1>Portfolio de Daniel</h1>
      </header>
      <section className="content">
        <div className="gallery">
          {images.map((image, index) => (
            <div className="image-item" key={index}>
              <img src={image.src} alt={image.description} />
              <p>{image.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
