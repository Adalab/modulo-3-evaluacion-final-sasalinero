

<h1 align="center"> Personajes de Ricky and Morty</h1>


<p align="center"><img  src="https://media.giphy.com/media/liBsVeLILcyaY/giphy.gif" alt="gif" /></p>



  
#### 1. Listado de personajes
En primer lugar, vamos a realizar una web con el listado de personajes de Rick and Morty. Para eso, vamos a utilizar el servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno, vamos a pintar al menos:
  - Foto 
  - Nombre 
  - Especie
  
#### 2. Filtrado de personajes
Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas. En el pantallazo de arriba, al escribir 'Ric' aparecen personajes cuyo nombre completo contiene esas letras en ese orden.
  
#### 3. Componentes del listado de personajes
El listado debe tener los siguientes componentes como mínimo:
  - Componente para el filtro de nombre.
  - Componente para el listado.
  - Componente para la tarjeta de cada personaje del listado. Componente para el detalle de cada personaje.
  
#### 4. Detalle de personajes
Vamos a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Para hacer esto usaremos rutas y React Router DOM. En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.

#### 5. Detallitos de calidad

- Como nos gusta cuidar la semántica, el campo de texto debe estar recubierto por una etiqueta <form />.
- Si estando en el campo de filtrado pulsamos intro debéis impedir que el navegador navegue o cambie la ruta sin querer.
- Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se debe mostrar un mensaje del tipo "No hay ningún personaje que coincida con la palabra XXX".
- El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.
- Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto debe mostrar el texto que tenía anteriormente.

#### 6. BONUS: Afinar la maquetaciónBONUS: Mejoras visuales

Para terminar, podéis realizar algunas mejoras visuales del ejercicio. Por ejemplo:
Mostrar la especie y si un personajes está muerto con un icono. Usar algún sistema de grid para pintar el listado de personajes. Que funcione bien el responsive en dispositivos pequeños.

#### 7. BONUS: URL compartible

- Como ejercicio extra os proponemos que la URL del detalle de personaje sea compartible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle del personaje. Si refescamos el navegador en el detalle de un personaje debe volver a mostrar el detalle del personaje.
- Y en el caso de que el usuario navegue a una URL inexistente como por ejemplo http://localhost:3000/#/detail/12345 (el id 12345 no existe) debemos mostrar un mensaje del tipo "El personaje que buscas no existe".

#### 8. BONUS: Ordenación

Un extra interesante sería que ordenáseis el listado de personajes alfabéticamente por nombre.

#### 9. BONUS: Más filtros

Un extra interesante sería que añadáis más filtros para filtrar por ejemplo por especie.

## Construido con 🛠️️

![React](https://img.shields.io/badge/-React-333333?style=flat&logo=react)&nbsp;  ![JavaScript](https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript)&nbsp;
![HTML](https://img.shields.io/badge/-HTML-333333?style=flat&logo=HTML5)&nbsp;![CSS](https://img.shields.io/badge/-CSS-333333?style=flat&logo=CSS3&logoColor=1572B6)&nbsp; 
![Sass](https://img.shields.io/badge/Sass-333333?style=flat&logo=sass&logoColor=pink)&nbsp;
![GitHub](https://img.shields.io/badge/-GitHub-333333?style=flat&logo=github)&nbsp; &nbsp;
![Visual Studio Code](https://img.shields.io/badge/-Visual%20Studio%20Code-333333?style=flat&logo=visual-studio-code&logoColor=007ACC)&nbsp;

## Autor ✒️

:heart: Samantha Salinero [Github](https://github.com/sasalinero)

## Contacto 📱

<a href="https://www.linkedin.com/in/samantha-salinero/" target="about_blank">Linkedin</a>
