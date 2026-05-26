// =========================================================================
// SÉCURITÉ KINSANTÉ : PROTECTION ABSOLUE ET ANTI-TRICHE (FREEZE CONSOLE)
// =========================================================================

// 1. PIÈGE EN BOUCLE : Si la console ou l'inspecteur s'ouvre, le site freeze instantanément
setInterval(function() {
    debugger; 
}, 100);

// 2. Bloque le clic droit sur toute la page
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// 3. Bloque tous les raccourcis clavier de vol (Copier, Source, Inspecter)
document.addEventListener('keydown', function(e) {
    // Bloque Ctrl+C, Ctrl+U (view-source), Ctrl+S (sauvegarde)
    if (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'C' || e.key === 'U' || e.key === 'S')) {
        e.preventDefault();
        return false;
    }
    
    // Bloque l'inspecteur (Ctrl+Shift+I, Ctrl+Shift+J ou Ctrl+Shift+C)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
        return false;
    }
    
    // Bloque la touche F12
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }
});

// 4. Bloque la sélection sauvage de tes textes et données clients
document.onselectstart = new Function ("return false");
if (window.sidebar) {
    document.onmousedown = function () { return false; };
    document.onclick = function () { return true; };
}
