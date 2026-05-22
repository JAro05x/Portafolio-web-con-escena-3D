# 🎮 Web Portfolio with 3D Interactive Scene (Gamer Diorama)

## 📌 Academic Information
* **Institution:** Instituto Tecnológico de Mérida (TecNM Campus Mérida)
* **Major:** Computer Systems Engineering (Ingeniería en Sistemas Computacionales)
* **Semester:** 5th Semester
* **Group:** 5SA
* **Course:** Computer Graphics (Graficación)
* **Instructor:** Mtr. Rodrigo Fidel Gaxiola Sosa
* **Student:** José Antonio Rosado Osorio

---

## 🌌 Project Overview
This project consists of the design, modeling, optimization, and web integration of an **Interactive 3D Diorama** with a high-saturation *Cyberpunk / Neon Vibrant* aesthetic. The scenario represents a complete *Gamer Setup*, optimized using *Low-Poly* modeling techniques to ensure smooth data transfer rates and optimal performance in web environments via Google's `<model-viewer>` component.

---

## 🛠️ Technical Specifications & Modeling

### 🔹 Intellectual Property Assets (Modelated From Scratch)
Designed, extruded, and structured natively using advanced geometric transformations and modifiers (such as *Mirror* and *Subdivision*) in **Blender**:
* **Room Architecture:** Walls, floor, windows, and overall structural layout of the bedroom.
* **Gamer Desk:** Main support structure and base layout for peripherals.
* **Workstation (PC Case):** Custom-designed desktop tower with internal hardware suggestions.
* **Screens & Peripherals:** High-refresh-rate monitor and mechanical keyboard.
* **Secondary Furniture:** Shelves, decorative supports, and environment details tailored to a personal gaming setup style.

### 🔹 Imported Assets & Optimization (Credits)
External resources obtained from the 3D community, integrated to enrich the diorama's composition, optimized in polygon count, and re-textured with environment PBR materials:
* **Basketball:** Original asset by **Ika3D** (Sketchfab).
* **Complete Bed:** Original asset by **hectopod** (Sketchfab).
* **Organic Planter:** Original asset by **Giora** (Sketchfab).
* **Gaming Mouse:** Original asset by **rubykamen** (Sketchfab).
* **Leather Puff:** Original asset by **Hey Arnold** (Sketchfab).

### 💡 Lighting & Materials (Neon Glow Effect)
* **Emission Maps:** Material nodes configured with emission properties in Neon Purple (`#7F2BFF`) and Bright Cyan (`#00FFFF`) to simulate ambient LED strips and screen glows.
* **Transmission Optimization:** The complete scene was exported in the industry-standard **GLB** format. The final file size was compressed to **39 MB** using **Draco compression** to guarantee near-instant web loading times.

---

## 🌐 Web Integration & Interactiveness
The diorama is deployed within a responsive web interface (`diorama.html`) powered by Google's open-source **Model-Viewer** library.

### ⚙️ Implemented Interactive Features:
1. **Orbit Control (Camera Controls):** Allows users to rotate, zoom, and pan the camera 360 degrees via touch gestures or mouse inputs.
2. **Environment Light Switch (JavaScript):** A dynamic JS script that manipulates the `exposure` attribute of the 3D viewport to toggle between production daylight (`1.2`) and an immersive neon night atmosphere (`0.3`), simulating turning off the bedroom lights.

---

## 🚀 Local Deployment & Installation

1. Clone this repository to your local machine:
   ```bash
   git clone [https://github.com/JAro05x/Portafolio-web-con-escena-3D.git](https://github.com/JAro05x/Portafolio-web-con-escena-3D.git)

   
