export function Prueba({ nombre, apellido }) {
    const products = [
        { title: 'Col', id: 1, description: "nose" },
        { title: 'Ajo', id: 2, description: "condimento para cocinar" },
        { title: 'Manzana', id: 3, description: "es una fruta" },
      ];
    return (
      <>
        <h1>
            hola {nombre} {apellido}
        </h1>

        {products.map((producto, i) => {
          return (<div key={producto.id}>
          <h2>title: {producto.title}</h2>
          <p>{producto.description}</p>
          </div>)

          })}
      </>
    );

}