# **HeroesApp-Angular**

El proyecto fue elaborado con [Angular CLI](https://github.com/angular/angular-cli) versión 13.3.3.
## **Descripción**

- Podremos crear una cuenta, nos verifica si existe (arroja mensajes de error) y si no existe nos arroja el dashboard guardando el json web token. Si lo borramos y recargamos el navegador web nos saca de la aplicación

- Si ya tenemos cuenta nos arroja un nuevo token cada vez que ingresemos a la aplicación


## **Temas** ##
<br>
A continuación, se presenta los temas fundamentales aplicados en la elaboración de esta aplicación:

- 1. Conectar Angular con nuestro backend https://github.com/Miguel-Parra/AuthApp_MEAN_backend 
- 2. Manejo de JWT
- 3. Lazyload y rutas
- 4. Guards
- 5. Mantener el estado del usuario
- 6. Manejo de errores
- 7. RXJS y Operadores
- 8. SweetAlert

Tecnologías utilizadas:

- Angular
- SweetAlert2


<br>

## **Sweetalert2**

https://sweetalert2.github.io/

Es una librería con cuadros emergentes (popup boxes) elegantes. 

Para instalarlo lo podemos hacer de 2 maneras:

1. ``npm install sweetalert2``

2. Mediante un cdn: ``<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>``

<br>

## **Backend**
Para el backend se utilizo node junto con express.js.
El proyecto se encuentra en: https://github.com/Miguel-Parra/AuthApp_MEAN_backend 

<br>

## **Heroku**

<br>

La aplicación se encuentra desplegada en:

https://authapp-mean-angular-node.herokuapp.com/

<br>

## **Recomendaciones**

<br>

- Recuerden reconstruir los módulos de Node con `npm install`

- Para correr el servidor de desarrollo ejecute `ng serve -o`. La aplicación se recargará automáticamente si cambia cualquiera de los archivos de origen.


- Si desea compilar el proyecto ejecute `ng build`.
