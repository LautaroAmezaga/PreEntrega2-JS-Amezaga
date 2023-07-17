let sum = 0;
let productos = [
  {
    nombre: 'Remera Seleccion Argentina 2022',
    precio: 5000
  },
  {
    nombre: 'Remera del Arsenal',
    precio: 5000
  },
  {
    nombre: 'Remera de Boca jr',
    precio: 5000
  },
  {
    nombre: 'Remera de Chelsea',
    precio: 5000
  },
  {
    nombre: 'Remera de Inter de Milan',
    precio: 5000
  },
  {
    nombre: 'Remera de Juventus',
    precio: 5000
  },
  {
    nombre: 'Remera de Liverpool',
    precio: 5000
  },
  {
    nombre: 'Remera de Manchester city',
    precio: 5000
  },
  {
    nombre: 'Remera de Milan',
    precio: 5000
  }, 
  {
    nombre: 'Remera de Napoli',
    precio: 5000
  },
  {
    nombre: 'Remera de OL Lyon',
    precio: 5000
  },
  {
    nombre: 'Remera de Racing',
    precio: 5000
  },
  {
    nombre: 'Remera de Real Madrid',
    precio: 5000
  },
  {
    nombre: 'Remera de Barcelona',
    precio: 5000
  },
  {
    nombre: 'Remera de River PLate',
    precio: 5000
  },
  {
    nombre: 'Remera de Tottenham',
    precio: 5000
  },
];

function elegirProductos() {
  let mensaje = 'Productos disponibles:\n\n';
  productos.forEach((producto, index) => {
    mensaje += `${index + 1}. ${producto.nombre} - Precio: $${producto.precio.toFixed(2)}\n`;
  });
  alert(mensaje);

  let seleccionaProducto = parseInt(prompt('Elija un producto (ingrese el número correspondiente):')) - 1;

  if (seleccionaProducto >= 0 && seleccionaProducto < productos.length) {
    let producto = productos[seleccionaProducto];
    let precio = parseFloat(prompt(`Ingrese el precio de la ${producto.nombre}:`));
    let cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto.nombre} a comprar:`));

    while (isNaN(precio) || precio < 0) {
      alert('El precio ingresado es inválido. Por favor, ingrese un número válido.');
      precio = parseFloat(prompt(`Ingrese el precio de la ${producto.nombre}:`));
    }

    while (isNaN(cantidad) || cantidad < 0) {
      alert('La cantidad ingresada es inválida. Por favor, ingrese un número válido.');
      cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto.nombre} a comprar:`));
    }

    let costo = precio * cantidad;
    sum += costo;
    console.log(`Costo de ${cantidad} ${producto.nombre}(s): $${costo.toFixed(2)}`);
  } else {
    alert('La selección es inválida');
    elegirProductos();
  }
}

while (true) {
  elegirProductos();
  let seguirEligiendo = prompt('¿Desea seleccionar más productos? (si/no)').toLowerCase();
  if (seguirEligiendo !== 'si') {
    break;
  }
}

alert(`El total de todos los productos es: $${sum.toFixed(2)}`);

