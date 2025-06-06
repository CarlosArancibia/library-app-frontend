# 📚 Frontend - Library Manager

Este es el frontend de una aplicación de gestión de libros. Está construido con **React**, **Zustand** para el manejo del estado global, y se comunica con una API RESTful desarrollada en .NET.

## 🚀 Funcionalidades

- Autenticación con JWT
- Login de usuarios (Admin y User)
- Listado de libros
- Crear, actualizar y eliminar libros (solo Admin)
- Selección de libro activo
- Manejo centralizado del estado con Zustand

---

## 🧱 Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Axios](https://axios-http.com/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🔧 Instalación

1. Clona el repositorio:

```bash
git https://github.com/CarlosArancibia/library-app-frontend.git
cd library-app-frontend
`
```

### Usuarios de prueba

Para autenticarte, puedes usar el siguiente usuario mockeado:

```json
{
  "email": "admin",
  "password": "password"
},
{
  "email": "user1",
  "password": "123456"
},
{
  "email": "carlos",
  "password": "mipass"
}
```
