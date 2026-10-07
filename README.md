Descripción:

Este proyecto es una demo interactiva para gestionar y filtrar estudiantes. Incluye funcionalidades para agregar nuevos estudiantes, buscar por email, aplicar filtros combinados y editar o borrar estudiantes directamente desde la lista. Es ideal para practicar conceptos básicos de desarrollo web y manipulación del DOM.

Tecnologías utilizadas

HTML: Estructura del contenido.
CSS: Estilos y diseño visual.
normalize.css: Para asegurar estilos consistentes entre navegadores.
JavaScript: Lógica interactiva y dinámica.
Conocimientos practicados
Manipulación del DOM:
Crear y modificar elementos dinámicamente (createElement, innerHTML, appendChild).
Manejo de eventos (addEventListener) para interactividad.
Filtrar y buscar datos en arrays para actualizar el contenido del DOM.
Limpiar y actualizar secciones del DOM (innerHTML = "").
Editar y borrar elementos directamente desde el DOM.
Uso de template strings:
Generar contenido dinámico en HTML utilizando interpolación de variables con backticks (`).
Evento DOMContentLoaded:
Garantiza que el código JavaScript se ejecute solo después de que el DOM esté completamente cargado.
En este proyecto, se utiliza para inicializar la lista de estudiantes al cargar la página:
document.addEventListener("DOMContentLoaded", () => {
    renderStudentList(students);
});
Ejemplos incluidos
Renderizar estudiantes y agregar nuevos:

Un formulario para agregar estudiantes con campos como nombre, edad, email y curso.
Los estudiantes se muestran dinámicamente en la página.
Filtro único por email:

Un buscador por email que permite encontrar un estudiante específico.
Incluye un botón para borrar el resultado de la búsqueda.
Filtros combinados:

Filtros por edad, curso y búsqueda por email.
Los filtros se aplican de manera combinada para mostrar resultados específicos.
Editar y borrar estudiantes:

Cada estudiante tiene un botón para editar sus datos directamente en el DOM mediante un formulario dentro del article.
También incluye un botón para borrar el estudiante de la lista y del array.
Cómo ejecutarlo
Clona este repositorio en tu máquina local:

git clone <URL_DEL_REPOSITORIO>
Navega a la carpeta del proyecto:

cd web_js_dom_students
Abre el archivo index.html en tu navegador:

Puedes hacerlo directamente haciendo doble clic en el archivo.
Alternativamente, utiliza una extensión como Live Server en VS Code para ejecutarlo en un servidor local.
Estructura del proyecto
index.html: Página principal con la estructura del contenido.
styles/normalize.css: Archivo para asegurar estilos consistentes entre navegadores.
styles/style.css: Archivo de estilos para el diseño visual.
script.js: Archivo JavaScript con la lógica interactiva.
README.md: Documentación del proyecto.