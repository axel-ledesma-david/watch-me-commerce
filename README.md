# watch-me-commerce
## Ecommerce / Tienda de relojes
---
Este proyecto es un e-commerce de relojes de mano.

### **Aclaraciones**
---
#### !Al iniciar o recargar la página el contenido que está entre medio del navbar y el footer no aparece (debería dirigir a la ruta principal que es el Home).
#### Esto es un bug que me surgió luego de pasar el proyecto a producción y hostear la página a _GitHub Pages_¡

## Dependencias y librerias ✈

Las dependencias, librerias que usé son las siguientes:

1. react-router-dom
1. bootstrap
1. firebase
1. sweetalert2
1. aos

### Bootstrap

Usé la librería de bootstrap para crear los estilos de froma mas ágil

### sweetalert2

Sweet Alert es una librería que crea alertas de todo tipo y lo usé para notificarle al usuario cuando agrega un producto al carrito y cuando confirma la compra luego
de mandar el formulario

### Aos
Aos es una librería que implementé para crear efectos en algunos elementos del dom al hacer scroll en la página. Una cuestión puramente estética al igual que bootstrap.

## Flow

Como mencione anteriormente, al iniciar la página o al cargarla solo aparece el navbar y el footer. Pero quitando de lado eso, en el menú de navegación se pueden encontrar las rutas Home, Catalogue y Categoria. Al entrar al catalogo uno puede buscar entre muchos productos (relojes) de distintios tipos, se puede ver el detalle del producto y agregarlo al carrito si así lo desea. También se puede filtrar por categoria con la ruta "Catalogue". Y por último está la página del carrito donde estarán todos los productos seleccionados con su precio y el precio total de todos los productos con sus cantidades. También tiene un formulario donde se pedirán algunos datos para poder confirmar la orden.


![chrome_aBiIav50j0](https://user-images.githubusercontent.com/74274367/227411513-f51d6040-69c5-4da7-901a-a4581ea82188.gif)


![chrome_ieFBQp4yGl](https://user-images.githubusercontent.com/74274367/227411839-158c0197-afc6-4cc7-8fbc-cda3a0ad6b26.gif)







