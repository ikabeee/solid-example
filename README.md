# API de Autenticación con SOLID

Este proyecto es una API de autenticación simple implementada con Express.js, TypeScript y PostgreSQL, siguiendo los principios SOLID y una arquitectura modular.

## 🚀 Tecnologías

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- Docker & Docker Compose
- JWT para autenticación

## 📋 Prerrequisitos

- Node.js (v14 o superior)
- Docker y Docker Compose
- PostgreSQL (opcional, ya que usamos Docker)

## 🛠️ Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/ikabeee/solid-example.git
cd solid-example
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```

4. Iniciar la base de datos con Docker:
```bash
docker-compose up -d
```

5. Ejecutar las migraciones de Prisma:
```bash
npm run prisma:generate
npm run prisma:migrate
```

6. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## 📁 Estructura del Proyecto

```
src/
├── modules/
│   └── auth/              # Módulo de autenticación
│       ├── AuthController.ts
│       ├── AuthService.ts
│       ├── UserRepository.ts
│       ├── IAuthService.ts
│       ├── IUserRepository.ts
│       └── auth.routes.ts
└── app.ts
```

## 🔐 Endpoints

### Autenticación

- `POST /auth/register` - Registrar un nuevo usuario
  ```json
  {
    "email": "usuario@ejemplo.com",
    "password": "contraseña123",
    "name": "Nombre Usuario"
  }
  ```

- `POST /auth/login` - Iniciar sesión
  ```json
  {
    "email": "usuario@ejemplo.com",
    "password": "contraseña123"
  }
  ```

## 🎯 Principios SOLID

Este proyecto implementa los principios SOLID de la siguiente manera:

### 1. Single Responsibility Principle (SRP)
- Cada clase tiene una única responsabilidad:
  - `UserRepository`: Maneja el acceso a datos
  - `AuthService`: Maneja la lógica de negocio
  - `AuthController`: Maneja las peticiones HTTP
  - `auth.routes.ts`: Maneja el enrutamiento

### 2. Open/Closed Principle (OCP)
- Las interfaces permiten extender la funcionalidad sin modificar el código existente
- Podemos crear nuevas implementaciones de `IUserRepository` o `IAuthService` sin modificar el código existente
- Ejemplo: Podríamos crear una nueva implementación de `UserRepository` para MongoDB sin afectar el resto del código

### 3. Liskov Substitution Principle (LSP)
- Las implementaciones pueden ser sustituidas por sus interfaces
- Podemos cambiar la implementación de `UserRepository` sin afectar el resto del código
- La clase `UserRepository` implementa completamente la interfaz `IUserRepository`

### 4. Interface Segregation Principle (ISP)
- Las interfaces son específicas para cada caso de uso
- `IUserRepository` y `IAuthService` tienen métodos específicos para sus responsabilidades
- No hay interfaces "gordas" con métodos que no se usan

### 5. Dependency Inversion Principle (DIP)
- Los módulos de alto nivel dependen de abstracciones
- `AuthService` depende de `IUserRepository` en lugar de una implementación concreta
- Las dependencias se inyectan a través de constructores

## 🐳 Docker

El proyecto incluye un `docker-compose.yml` que configura:
- PostgreSQL
- pgAdmin (interfaz web para gestionar la base de datos)

Para acceder a pgAdmin:
- URL: http://localhost:5050
- Email: admin@admin.com
- Password: admin

## 📝 Scripts Disponibles

- `npm run dev`: Inicia el servidor en modo desarrollo
- `npm run build`: Compila el proyecto TypeScript
- `npm start`: Inicia el servidor en producción
- `npm run prisma:generate`: Genera el cliente Prisma
- `npm run prisma:migrate`: Ejecuta las migraciones de la base de datos

## 🔒 Seguridad

- Las contraseñas se hashean usando bcrypt
- Se utiliza JWT para la autenticación
- Las variables sensibles se manejan a través de variables de entorno

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. 