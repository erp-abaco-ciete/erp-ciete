# Creación del proyecto base

## Objetivo

Dejar preparado el proyecto base sobre el que trabajará el equipo 1, usando Laravel 12 con React y Vite, para que todos puedan partir de una misma estructura técnica desde el inicio.

## Pasos realizados

### 1. Creación del proyecto Laravel

Se creó el proyecto base con Laravel 12 mediante Composer:

```
composer create-project laravel/laravel:^12.0 practicaAbacoProyectoCiete
```

### 2. Instalación de Breeze

Se añadió Laravel Breeze como sistema base de arranque para integrar autenticación y estructura inicial compatible con React:

```
composer require laravel/breeze --dev
```

### 3. Instalación de Breeze con React

Se generó la estructura base del frontend con React:

```
php artisan breeze:install react
```

### 4. Instalación de dependencias del frontend

Se instalaron las dependencias necesarias de Node para compilar y ejecutar la parte frontend con Vite:

```
npm install
```

### 5. Configuración inicial de Laravel

Se generó la clave de aplicación y se dejó preparado el archivo de entorno:

```
php artisan key:generate
```

### 6. Configuración de base de datos

Antes de ejecutar las migraciones hay que crear la base de datos en XAMPP (phpMyAdmin). Nombrad la base de datos igual que el valor de `DB_DATABASE` en el archivo `.env` o, si preferís otro nombre, actualizad `DB_DATABASE` en `.env` para que coincida.

Se configuró el resto de valores de conexión en `.env` para conectar el proyecto con MySQL.

### 7. Ejecución de migraciones base

Se ejecutaron las migraciones iniciales de Laravel para comprobar que la conexión con base de datos funciona correctamente:

```
php artisan migrate
```

### 8. Comprobación del arranque del proyecto

Se comprobó que el proyecto arranca correctamente tanto en backend como en frontend:

```
php artisan serve
npm run dev
```

### Imágenes locales

Si tenéis imágenes que forman parte del proyecto (no por URL), tenéis dos opciones comunes:

- Opción 1 (sencilla): colocad las imágenes en `public/images`. Se servirán tal cual y podréis referenciarlas con `/images/mi-imagen.jpg` (en Blade: `asset('images/mi-imagen.jpg')`).
- Opción 2 (recomendado para gestión de uploads): guardadlas en `storage/app/public/images` y ejecutad `php artisan storage:link` para crear el enlace simbólico público. Después referenciadlas con `asset('storage/images/mi-imagen.jpg')`.

Para componentes React con Vite, las imágenes estáticas en `public/` se pueden usar directamente (ej. `/images/mi-imagen.jpg`). Si preferís importarlas en los módulos, colocadlas dentro de `resources/js/` y usad `import img from '../../images/mi.jpg'` desde los componentes (Vite las procesará).
