
![Logo](https://wabit.cl/coder_app/logo_wabit_small.png)



# **Wabit Store**

> Proyecto Comisión 59525 - CoderHouse

Wabit Store es un proyecto creado con React Native 0.74 y Expo Go SDK 51

El proyecto consiste en una tienda online con las siguientes características:

- Screen de Categorias
- Screen de Productos
- Screen de Ficha del Producto
- Carrito de compra con limite de stock y calculo de total a pagar dinámico
- Inicio de sesión o registro de usuarios requerido para el Checkout del Carrito
- En la screen de Inicio se pueden visualizar hasta los últimos 5 productos que el cliente ha visitado
- Posee persistencia de inicio de sesión gracias a SQLite
- El checkout del carrito permite seleccionar la dirección del envío de la compra a través del uso del GPS
- La Screen de Perfil de Usuario, permite tomar una foto con la cámara del dispositivo para utilizarla de foto de perfil

**Te dejo invitado a probar la aplicación para descubrir otras funcionalidades**


## 🛠 Dependencias Principales
Puede encontrar el listado completo de dependencias en el archivo package.json

- Expo **SDK 51**
- React 18.2.0
- React Native 0.74.5
- React Redux 9.1.2
- Expo SQLite 14.0.6
- React Navigation Native 6.1.18
- React Navigation Bottom Tabs 6.6.1
- React Navigation Native Stack 6.11.0
- Redux Toolkit 2.3.0

Existen dependencias adicionales utilizadas para la estética y funcionalidad de componentes segundarios de la aplicación. Revise el detalle en el package.json ubicado en la raíz del proyeto




## Instalación

Requiere NodeJS 18 o superior

```bash
  npm install -g expo-cli
  git clone https://github.com/benjagdg/coder59525-reactnative-proyect
  npm install
```

**Antes de iniciar el proyecto** se requiere de la creación de un archivo .env en la raíz del proyecto con los siguientes parametros:

```bash
EXPO_PUBLIC_FIREBASE_DATABASE_URL = 
EXPO_PUBLIC_FIREBASE_AUTH_URL = 
EXPO_PUBLIC_FIREBASE_API_KEY = 
```

Una vez creado el archivo .env se procede a ejecutar el proyecto

```bash
  npx expo start
```

## Usuario de Prueba

**Correo:** demo@coder.com

**Contraseña:** clavesegura123


## Estudiante
- Benjamín García del Gaiso > [@benjagdg](https://www.github.com/benjagdg)

