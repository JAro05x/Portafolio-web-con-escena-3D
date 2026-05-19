// ==========================================
// Lógica Completa de SPA (Single Page Application) - Con Debugging
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // Confirmación inicial de carga
    console.log('DOM Cargado y script enlazado correctamente');

    // 1. Obtener contenedores principales
    const homeSection = document.getElementById("home-section");
    const riveSection = document.getElementById("rive-section");
    const blenderSection = document.getElementById("blender-section");

    // --- VALIDACIONES DE CONTENEDORES ---
    if (!homeSection) console.error("No se encontró el contenedor con ID: home-section");
    if (!riveSection) console.error("No se encontró el contenedor con ID: rive-section");
    if (!blenderSection) console.error("No se encontró el contenedor con ID: blender-section");

    // 2. Obtener botones del menú
    const btnRive = document.getElementById("btn-rive");
    const btnBlender = document.getElementById("btn-blender");
    
    // --- VALIDACIONES DE BOTONES DEL MENÚ ---
    if (!btnRive) console.error("No se encontró el botón con ID: btn-rive");
    if (!btnBlender) console.error("No se encontró el botón con ID: btn-blender");

    // 3. Obtener botones de "Regresar"
    const btnBackRive = document.getElementById("btn-back-rive");
    const btnBackBlender = document.getElementById("btn-back-blender");

    // --- VALIDACIONES DE BOTONES DE REGRESO ---
    if (!btnBackRive) console.error("No se encontró el botón con ID: btn-back-rive");
    if (!btnBackBlender) console.error("No se encontró el botón con ID: btn-back-blender");

    /**
     * Función principal que restaura la vista al Inicio
     * Oculta los proyectos usando la clase .hidden
     */
    function showHome() {
        if (homeSection) homeSection.classList.remove("hidden");
        if (riveSection) riveSection.classList.add("hidden");
        if (blenderSection) blenderSection.classList.add("hidden");
        
        // Regresa la vista hacia arriba suavemente
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Inicializar estado: Mostrar solo Home al cargar
    showHome();

    // ==========================================
    // Controladores de Eventos (Event Listeners)
    // ==========================================
    
    // NAVEGACIÓN HACIA: FLUTTER + RIVE
    if (btnRive) {
        btnRive.addEventListener("click", () => {
            console.log('Clic detectado en Flutter'); // Rastro de depuración
            if (homeSection) homeSection.classList.add("hidden");
            if (riveSection) riveSection.classList.remove("hidden");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // NAVEGACIÓN HACIA: BLENDER (SETUP 3D)
    if (btnBlender) {
        btnBlender.addEventListener("click", () => {
            console.log('Clic detectado en Blender'); // Rastro de depuración
            if (homeSection) homeSection.classList.add("hidden");
            if (blenderSection) blenderSection.classList.remove("hidden");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // BOTONES DE REGRESO
    if (btnBackRive) {
        btnBackRive.addEventListener("click", () => {
            console.log('Clic detectado en Regresar (desde Flutter)');
            showHome();
        });
    }

    if (btnBackBlender) {
        btnBackBlender.addEventListener("click", () => {
            console.log('Clic detectado en Regresar (desde Blender)');
            showHome();
        });
    }
});

// ==========================================
// Inicialización de Three.js
// ==========================================
// Función vacía declarada tal como se solicitó para uso futuro
function initThreeJS() {
    console.log("Inicializando escena 3D con Three.js...");
    // El setup de Three.js irá aquí más adelante
}
