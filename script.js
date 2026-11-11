const alertBox = document.getElementById('alert-box');
const alertTag = document.getElementById('alert-tag');
const alertUser = document.getElementById('alert-user');
const alertMsg = document.getElementById('alert-msg');
const alertIcon = document.getElementById('alert-icon');
const energyFill = document.querySelector('.energy-fill');

const inputUsername = document.getElementById('username');
const inputMessage = document.getElementById('message');

let audioCtx = null;

// Cambiar Tema de Videojuego
function setTheme(theme) {
    alertBox.className = `${theme}-theme visible-preview`;
    
    document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.theme-btn.${theme}`).classList.add('active');
}

// Actualizar textos en tiempo real
function updateAlertText() {
    alertUser.textContent = inputUsername.value || "Player";
    alertMsg.textContent = inputMessage.value;
}

// Sonido de interfaz de videojuego (Web Audio API)
function playGamingSound() {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.type = 'square'; // Sonido digital tipo 8-bit / Sci-Fi HUD
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15);
        
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
    } catch(e) {
        console.log("Audio esperando interacción.");
    }
}

// Disparar Alerta con animación HUD y barra de progreso
function triggerAlert(type, labelText) {
    updateAlertText();
    alertTag.textContent = labelText;

    if (type === 'sub') alertIcon.textContent = "⭐";
    else if (type === 'raid') alertIcon.textContent = "🔥";
    else alertIcon.textContent = "⚔️";

    playGamingSound();

    // Reiniciar animación y barra de energía
    alertBox.classList.remove('visible-preview', 'animate');
    void alertBox.offsetWidth; // Fuerza el reflow
    alertBox.classList.add('animate');

    // Reiniciar animación de la barra inferior
    energyFill.style.animation = 'none';
    void energyFill.offsetWidth;
    energyFill.style.animation = 'drainEnergy 4s linear forwards';

    // Ocultar pasados 4 segundos
    setTimeout(() => {
        alertBox.classList.remove('animate');
        alertBox.classList.add('visible-preview');
    }, 4000);
}

// Modo OBS (Pantalla limpia solo con el HUD flotante)
function toggleOBSMode() {
    document.querySelector('.studio-header').style.display = 'none';
    document.querySelector('.studio-container').style.display = 'none';
    document.body.style.backgroundColor = 'transparent';
    alertBox.classList.remove('visible-preview');
}