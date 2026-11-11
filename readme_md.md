# 🎮 HUD Alert Studio | Gaming Edition
> Un widget de alertas profesional y personalizable para transmisiones en directo en Twitch y Kick, diseñado con estética de interfaz de videojuego (HUD) para porfolios de DAW.

---

## 🌟 Descripción del Proyecto
**HUD Alert Studio** es una aplicación web interactiva desarrollada con tecnologías nativas (`HTML5`, `CSS3` y `JavaScript puro`) orientada al sector del streaming y la producción audiovisual. Permite simular y probar alertas en tiempo real con una interfaz inspirada en HUDs de videojuegos modernos (RPG, Sci-Fi y Boss Raids), y está totalmente optimizada para ser integrada directamente en **OBS Studio** como fuente de navegador.

---

## ✨ Características Principales

* **🎨 Estética HUD de Videojuego:** Marcos metálicos oscuros con esquinas recortadas (*sci-fi clips*), emblemas en rombo y tipografías punteras (`Teko` y `Rajdhani`).
* **🔄 Temas Dinámicos Intercambiables:** 
  * **RPG Gold:** Estética clásica de fantasía medieval y MMORPGs.
  * **Sci-Fi Energy (Cian):** Estética futurista e hipertecnológica.
  * **Boss Alert (Crimson):** Estética agresiva y de combate para eventos especiales.
* **⚡ Barra de Energía Dinámica:** Animación CSS en tiempo real que simula el tiempo de visualización de la alerta mediante una barra de carga decreciente.
* **🔊 Efectos de Audio Sintetizados:** Generación de efectos de sonido digitales mediante la **Web Audio API** de JavaScript sin necesidad de depender de archivos de audio externos (`.mp3`).
* **🎥 Modo OBS Transparente:** Botón de un solo clic que oculta automáticamente los paneles de control del estudio y deja el fondo transparente para la captura limpia en OBS Studio.

---

## 🛠️ Estructura Técnica

El proyecto sigue una arquitectura limpia y modular separando responsabilidades:

```text
/hud-alert-studio
│
├── index.html      # Estructura del estudio y contenedor del HUD de alerta
├── style.css       # Estilos avanzados, animaciones keyframes y temas HUD
└── script.js       # Lógica interactiva, control de textos, temas y Web Audio API
```

---

## 🚀 Cómo Usarlo e Integrarlo en OBS

1. **Clonar o descargar** los archivos del repositorio en tu ordenador.
2. **Abrir `index.html`** en cualquier navegador web para usar el estudio interactivo de pruebas.
3. **Integración en OBS Studio:**
   * Haz clic en el botón **"Modo OBS (Transparente)"** en la interfaz del estudio para limpiar la pantalla.
   * En OBS Studio, añade una nueva fuente de tipo **Navegador (*Browser Source*)**.
   * Pega la ruta local del archivo `index.html` (o la URL si lo despliegas en GitHub Pages).
   * Configura una resolución de ancho y alto adecuada (por ejemplo, `450 x 200` píxeles).

---

## 👨‍💻 Autor
Creado con fines académicos y de desarrollo profesional para el porfolio de DAW por **Álvaro (MingoDev)**.