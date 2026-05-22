// ==========================================
// Custom Interactive Neon Cursor
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Create cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Create trail elements
    const trailCount = 8;
    const trails = [];
    for (let i = 0; i < trailCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('cursor-trail');
        // Vary the animation delay slightly to make them feel organic
        dot.style.animationDelay = `${-i * 0.1}s`;
        document.body.appendChild(dot);
        trails.push({ x: 0, y: 0, el: dot });
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        // Tip of the cursor aligns with mouse coordinate (no transform offset)
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    // Trail animation loop
    function animateTrail() {
        let x = mouseX;
        let y = mouseY;
        trails.forEach((trail, index) => {
            const nextX = trail.x + (x - trail.x) * 0.35;
            const nextY = trail.y + (y - trail.y) * 0.35;
            trail.x = nextX;
            trail.y = nextY;
            // Scale down the trail as it gets further behind
            trail.el.style.transform = `translate(calc(-50% + ${nextX}px), calc(-50% + ${nextY}px)) scale(${1 - index / trailCount})`;
            x = nextX;
            y = nextY;
        });
        requestAnimationFrame(animateTrail);
    }
    animateTrail();

    // ==========================================
    // Visual Touches (Scanlines & Particles)
    // ==========================================
    const scanlines = document.createElement('div');
    scanlines.classList.add('scanlines');
    document.body.appendChild(scanlines);

    // Subtle Neon Particles Canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'bg-particles';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    window.addEventListener('resize', resize);
    resize();

    // Initialize particles
    for (let i = 0; i < 40; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4 - 0.2, // Float upwards slightly
            size: Math.random() * 1.5 + 0.5,
            color: Math.random() > 0.5 ? '#00FFFF' : '#7F2BFF'
        });
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            // Wrap around
            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = 0.5; // subtle glow
            ctx.fill();
        });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // Add hover effect to interactive elements
    const interactiveSelectors = 'a, button, input, label, .nav-card, .skill-nodule, .neon-switch-container';
    const interactiveElements = document.querySelectorAll(interactiveSelectors);

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });

    // Optional: Also watch for dynamically added elements in the future
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) { // ELEMENT_NODE
                        if (node.matches && node.matches(interactiveSelectors)) {
                            node.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
                            node.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
                        }
                        const children = node.querySelectorAll(interactiveSelectors);
                        children.forEach(child => {
                            child.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
                            child.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
                        });
                    }
                });
            }
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // ==========================================
    // Audio Player Logic
    // ==========================================
    const audioToggle = document.getElementById('audio-toggle');
    const bgAudio = document.getElementById('bg-audio');

    if (audioToggle && bgAudio) {
        // Set volume to a pleasant background level
        bgAudio.volume = 0.35;

        audioToggle.addEventListener('click', () => {
            if (bgAudio.paused) {
                bgAudio.play().then(() => {
                    audioToggle.classList.add('playing');
                }).catch(err => {
                    console.error("Audio playback failed:", err);
                });
            } else {
                bgAudio.pause();
                audioToggle.classList.remove('playing');
            }
        });
    }
});
