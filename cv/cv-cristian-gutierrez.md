# CV — Cristian Andrés Gutiérrez

> Versión Markdown del CV (para copiar/pegar en LinkedIn, Canva o formularios ATS).
> La versión visual imprimible está en `cv/index.html`.

---

**CRISTIAN ANDRÉS GUTIÉRREZ**
Estudiante de Ingeniería de Sistemas · Desarrollo Full-Stack

Valledupar, Cesar, Colombia · Tel: +57 304 261 1924 · cristianagutierrez@unicesar.edu.co
GitHub: github.com/cristianagutierrezalc · LinkedIn: linkedin.com/in/cristian-andres-gutierrez-a00443353
Disponibilidad: prácticas y proyectos freelance, presencial en Valledupar o remoto

## Perfil profesional

Soy estudiante de 4.º semestre de Ingeniería de Sistemas en la Universidad Popular del Cesar. Aprendí a programar construyendo cosas de verdad: un restaurante de mi ciudad usa en producción un menú digital que hice de cero, y mantengo un sistema de gestión multi-sede con base de datos propia y pruebas automatizadas. Prefiero cubrir los proyectos completos, desde la interfaz hasta la consulta SQL, y antes de escribir código procuro entender bien el problema.

## Experiencia en proyectos

Proyectos propios y para clientes: de la idea al despliegue.

**Menú digital Fuego & Carbón, sistema en producción para un restaurante real** · Python, FastAPI, HTML, CSS, JavaScript
El backend centraliza precios y catálogo como única fuente de verdad. Antes el frontend guardaba su propia copia del menú y se desincronizaba; ahora cualquier cambio de precio o disponibilidad se refleja de inmediato, sin tocar el HTML.

**GastroConnect, sistema de gestión de restaurantes multi-sede** · Java 17, JavaFX 21, PostgreSQL, Supabase
- Aplicación de escritorio modular con Maven; la interfaz la rediseñé desde Figma y la empaqueté con jpackage para instalar en Windows sin necesidad de Java.
- Base de datos en PostgreSQL sobre Supabase con 21 tablas: la lógica de negocio vive en 39 funciones PL/pgSQL y el aislamiento por tenant y sede se resuelve con 74 políticas de seguridad RLS.
- Escribí 168 pruebas end-to-end contra la base de datos real.

**PEA-i Plataforma, análisis estadístico de investigación para mi universidad** · FastAPI, React 18, Docker
- API REST documentada en Swagger con autenticación JWT por roles: admin, coordinador e investigador.
- Frontend en React con Vite y Tailwind, dashboard con KPIs y gráficos; el despliegue completo corre con Docker Compose.

**WEBPRICE, cotizador web de proyectos** · HTML, CSS, JavaScript, FastAPI
Los clientes de una agencia calculan por sí mismos estimaciones de inversión en pesos colombianos. El backend calcula todos los precios y nunca confía en los datos que envía el navegador.

## Formación académica

**Ingeniería de Sistemas, Universidad Popular del Cesar** · 2025 – en curso, 4.º semestre · Valledupar, Colombia

Proyecto PITA, taller de Estructura de Datos: cálculo de nómina, matrículas y promedios con estructuras de datos propias, interfaz en Tkinter y persistencia en archivos.

## Idiomas

Español: nativo. Inglés: A2, en formación.

## Habilidades técnicas

- **Lenguajes:** Java 17, Python, JavaScript, TypeScript, SQL y PL/pgSQL, HTML, CSS
- **Backend:** FastAPI, Flask, JavaFX 21, Maven, Node.js, Uvicorn, APIs REST
- **Frontend:** React 18, Vite, Tailwind CSS, Figma
- **Datos y herramientas:** PostgreSQL, Supabase, Row Level Security, SQLite, Docker, Git, Swagger, pruebas automatizadas
