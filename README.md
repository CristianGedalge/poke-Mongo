<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo
1. Clonar repo
2. Ejecutar
```
 npm install
```
3. Tener nest cli instalado
```
 npm i -g @nestjs/cli
```
4. clonar el archivo ``` .env.template``` y renombrar la copia  a  ```.env```

5. Levanta la Base de Datos
```
 docker compose up -d
```
6. Levantar la aplicacion
```
 npm run start:dev
```
7. Poblar la DB con la semilla
```
 http://localhost:300/api/v1/seed
```
#Stack Usado
* Nest
* mongoDB
# Production build
1. Crear el archivo ```.env.prod```
2.Llenar las var de entorno de prod
3.Crear La nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```