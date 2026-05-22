# 🎮 Portafolio Web con Escena 3D Interactiva (Diorama Gamer)

## 📌 Información Académica
* **Institución:** Instituto Tecnológico de Mérida (TecNM Campus Mérida)
* **Carrera:** Ingeniería en Sistemas Computacionales
* **Semestre:** 5to Semestre
* **Grupo:** 5SA
* **Asignatura:** Graficación
* **Docente:** Mtr. Rodrigo Fidel Gaxiola Sosa
* **Estudiante:** José Antonio Rosado Osorio

---

## 🌌 Descripción del Proyecto
Este proyecto consiste en el diseño, modelado, optimización e integración web de un **Diorama 3D Interactivo** con estética *Cyberpunk / Neon Vibrante*. El escenario representa un *Setup Gamer* completo, optimizado bajo la técnica de modelado *Low-Poly* para asegurar una tasa de transferencia fluida y un rendimiento óptimo en entornos web navegables mediante el componente de renderizado `<model-viewer>`.

---

## 🛠️ Especificaciones Técnicas y Modelado

### 🔹 Elementos de Propiedad Intelectual (Modelados desde cero)
Diseñados, extruidos y estructurados de manera nativa utilizando transformaciones geométricas avanzadas y modificadores (como *Mirror* y *Subdivision*) en **Blender**:
* **Arquitectura de la habitación:** Paredes, piso, ventanas y estructura general del cuarto.
* **Escritorio Gamer:** Soporte principal y base para los periféricos.
* **Estación de Trabajo (PC):** Gabinete y torre gamer con diseño personalizado.
* **Pantallas y Periféricos:** Monitor de alta tasa de refresco y teclado mecánico.
* **Mobiliario Secundario:** Repisas, soportes decorativos y detalles del entorno para simular un "cuarto a mi estilo".

### 🔹 Elementos Importados y Optimizados (Créditos de Assets)
Recursos externos obtenidos de la comunidad 3D, integrados para enriquecer la composición del diorama, optimizados en poligonización y re-texturizados con materiales del entorno:
* **Pelota de Baloncesto:** Asset original de **Ika3D** (Sketchfab).
* **Cama Completa:** Asset original de **hectopod** (Sketchfab).
* **Maceta Metálica/Orgánica:** Asset original de **Giora** (Sketchfab).
* **Mouse Gamer:** Asset original de **rubykamen** (Sketchfab).
* **Puff de Cuero:** Asset original de **Hey Arnold** (Sketchfab).

### 💡 Iluminación y Materiales (Efecto Neón)
* **Mapas de Emisión:** Configuración de materiales con nodos emisivos (*Emission*) en tonos Morado Neón (`#7F2BFF`) y Cian (`#00FFFF`) para simular la iluminación de tiras LED y pantallas de corte cyberpunk.
* **Optimización en Transmisión:** El escenario completo fue exportado en formato estándar **GLB**. El peso total de la escena fue comprimido a **39 MB** mediante codificación **Draco** para asegurar tiempos de carga web instantáneos.

---

## 🌐 Integración e Interactividad Web
El diorama se despliega en una interfaz responsiva (`diorama.html`) utilizando la biblioteca web de código abierto **Model-Viewer** de Google.

### ⚙️ Características Interactivas Implementadas:
1. **Control de Órbita (Camera Controls):** Permite al usuario rotar, hacer zoom y manipular la cámara en 360 grados de forma táctil o mediante el ratón.
2. **Interruptor de Ambiente (JavaScript):** Script dinámico en JS que manipula el atributo `exposure` (exposición) del visor 3D para alternar entre una iluminación diurna de producción (`1.2`) y una atmósfera inmersiva nocturna de neón (`0.3`), simulando el apagado de luces de la habitación.

---

## 🚀 Instalación y Despliegue Local

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone [https://github.com/JAro05x/Portafolio-web-con-escena-3D.git](https://github.com/JAro05x/Portafolio-web-con-escena-3D.git)
