function comprar() {
  let productos = [
    { nombre: "Zapatilla1", precio: 100 },
    { nombre: "Zapatilla2", precio: 150 },
    { nombre: "Zapatilla3", precio: 345 }
  ];

  let carrito = [];
  let total = 0;

  function agregarAlCarrito(producto) {
    carrito.push(producto);
    total += producto.precio;
  }

  let boton1 = document.getElementById("comprar1");
  let boton2 = document.getElementById("comprar2");
  let boton3 = document.getElementById("comprar3");

  boton1.addEventListener("click", function() {
    agregarAlCarrito(productos[0]);
    console.log("Carrito:", carrito);
    console.log("Total:", total);
  });

  boton2.addEventListener("click", function() {
    agregarAlCarrito(productos[1]);
    console.log("Carrito:", carrito);
    console.log("Total:", total);
  });

  boton3.addEventListener("click", function() {
    agregarAlCarrito(productos[2]);
    console.log("Carrito:", carrito);
    console.log("Total:", total);
  });
}

comprar();
