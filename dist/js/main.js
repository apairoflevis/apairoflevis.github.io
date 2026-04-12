(function () {
    // Start Menu
    var startBtn = document.getElementById('start-btn');
    var startMenu = document.getElementById('start-menu');

    startBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        startMenu.classList.toggle('open');
        startBtn.classList.toggle('active');
    });

    document.addEventListener('click', function () {
        startMenu.classList.remove('open');
        startBtn.classList.remove('active');
    });

    startMenu.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    // Clock
    function updateClock() {
        var el = document.getElementById('clock');
        if (el) el.textContent = new Date().toLocaleTimeString();
    }
    updateClock();
    setInterval(updateClock, 1000);

    // Window close button → back to home
    document.querySelectorAll('.window-close').forEach(function (btn) {
        btn.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    });

    // Window minimize button
    document.querySelectorAll('.window-controls button[aria-label="Minimize"]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var win = btn.closest('.win95-window');
            win.classList.toggle('minimized');
            win.classList.remove('maximized');
        });
    });

    // Window maximize button
    document.querySelectorAll('.window-controls button[aria-label="Maximize"]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var win = btn.closest('.win95-window');
            win.classList.toggle('maximized');
            win.classList.remove('minimized');
        });
    });
})();
