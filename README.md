# 🌎 Clima App · React

Aplicación web que muestra el **clima actual** y el **pronóstico de 5 días** de cualquier ciudad del mundo, construida con **React 19 + Vite** y la API pública **Open-Meteo** (no requiere API key).

🔗 **Demo en vivo:** https://acruzc23-crypto.github.io/clima-react-app/

## ✨ Funcionalidades

- Búsqueda de ciudades con validación del formulario
- Temperatura actual, sensación térmica, humedad y viento
- Pronóstico de 5 días con probabilidad de lluvia
- Recuerda la última ciudad consultada (`localStorage`)
- Manejo de estados de carga y errores (ciudad no encontrada, fallo de red)
- Diseño responsive (funciona en celular)

## 🛠️ Tecnologías

| Área | Herramientas |
|------|--------------|
| Frontend | React 19 (hooks, componentes funcionales), Vite |
| Datos | Fetch API, Open-Meteo Geocoding + Forecast API |
| Testing | Vitest, React Testing Library, jsdom |
| CI/CD | GitHub Actions → GitHub Pages |

## 📁 Estructura

```
src/
├── components/      # Buscador, ClimaActual, Pronostico
├── services/        # Cliente de la API Open-Meteo
├── utils/           # Funciones puras (códigos WMO, formatos, validación)
├── useClima.js      # Hook personalizado: estado de carga, error y datos
└── __tests__/       # Pruebas unitarias y de componentes
```

## 🚀 Cómo ejecutarlo

```bash
git clone https://github.com/acruzc23-crypto/clima-react-app.git
cd clima-react-app
npm install
npm run dev      # servidor de desarrollo
npm test         # ejecuta las pruebas
npm run build    # build de producción en /dist
```

## 🧪 Pruebas

8 pruebas automatizadas que cubren:
- Funciones utilitarias (traducción de códigos de clima, formato, validación)
- Componente `Buscador` (envío correcto y mensajes de error)
- Servicio de API con `fetch` simulado (mock)

Cada `push` a `main` ejecuta las pruebas y publica la app automáticamente en GitHub Pages.

## 📚 Lo que aprendí

- Separar la lógica en **servicios**, **utilidades puras** y un **hook personalizado**
- Consumir APIs REST con `async/await` y manejar errores
- Escribir pruebas de componentes con React Testing Library
- Automatizar despliegues con GitHub Actions

---

👤 **Desarrollado por Alfredo Cruz**, con asistencia de IA (Claude).
Estudiante de Ingeniería en Software — UNEMI, Ecuador.
[GitHub](https://github.com/acruzc23-crypto) · [LinkedIn](https://www.linkedin.com/in/alfredo-cruz-dev)
