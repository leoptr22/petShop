Petshop Blog - SPA con React
Este proyecto es una aplicación web construida con React y React Router, que simula el frontend de un blog o tienda de mascotas. Implementa componentes reutilizables, navegación dinámica por categorías y artículos, y consumo de API con hooks.

🚀 Características principales
🧱 Estructura de componentes
Header:

Contiene el logo (doguito.svg) y navegación con Link de React Router.

Diseño responsive con menú hamburguesa.

ListPosts:

Renderiza dinámicamente una lista de publicaciones.

Cada post tiene título, descripción y una clase que varía según su categoría.

Usa useEffect y useState para obtener datos desde una API externa simulada.

ListCategories:

Muestra una lista de categorías como filtros.

Cada categoría redirige a su propia ruta (/categoria/:id).

🧠 Lógica de negocio
buscar() es una función utilitaria que realiza fetch de endpoints dinámicos.

Toda la app está orientada a componentes funcionales con hooks de React (useEffect, useState).

Rutas manejadas con react-router-dom.

📁 Tecnologías utilizadas
⚛️ React.js

🌐 React Router

🧠 Hooks (useState, useEffect)

🎨 CSS modularizado por componente

🐶 Recursos gráficos locales (/assets/img/doguito.svg)

🔗 API simulada (buscar())

✅ Funcionalidades a futuro (opcional)
Integración con backend real (Firebase, Node, etc.).

Paginación o búsqueda por título.

Agregar detalle del post (/posts/:id).

Panel de administración (crear/editar/eliminar publicaciones).
