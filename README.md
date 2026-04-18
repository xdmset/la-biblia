La Biblia — Ciudad Maderas

Plataforma web para consultar contenido de ventas con navegación y búsqueda .

Stack
Frontend: React + Vite
Backend: Node.js + Express
Base de datos: MongoDB

Cómo correr el proyecto
1. Backend
cd backend
npm install

Crear archivo .env:

MONGODB_URI=mongodb://localhost:27017/la-biblia
PORT=5000

Cargar datos iniciales:

npm run seed

Iniciar servidor:

node server.js

Backend disponible en:

http://localhost:5000
2. Frontend
cd frontend
npm install

Opcional .env:

VITE_API_URL=http://localhost:5000/api

Iniciar:

npm run dev

Frontend disponible en:

http://localhost:3000
Endpoints principales
GET /api/articles → listar artículos
GET /api/articles/:slug → obtener artículo
GET /api/articles/search/query?q=texto → búsqueda por coincidencia
POST /api/requests → crear solicitud
GET /api/requests → listar solicitudes

Cómo funciona la búsqueda
El usuario escribe un texto
El backend busca  en MongoDB 
Se devuelven los artículos 

Estructura del proyecto
backend/
  models/
  routes/
  scripts/
  server.js

frontend/
  src/
    components/
    pages/
    services/
Agregar contenido

Editar:

backend/scripts/seedDatabase.js

Luego ejecutar:

npm run seed

Notas
MongoDB debe estar corriendo
Si no hay resultados en búsqueda, verificar que los datos estén cargados
El comando npm run seed borra y vuelve a insertar los artículos