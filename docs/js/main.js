(function () {
    // Shared Taskbar — inject into every page
    function renderTaskbar() {
        var html =
            '<div class="start-wrapper">' +
                '<nav class="start-menu" id="start-menu">' +
                    '<div class="start-menu-sidebar"><span>APairOfLevis95</span></div>' +
                    '<ul class="start-menu-items">' +
                        '<li><a href="about.html"><img class="nav-icon" src="img/about-icon.png" alt=""><span><u>A</u>bout</span></a></li>' +
                        '<li><a href="projects.html"><img class="nav-icon" src="img/projects-icon.png" alt=""><span><u>P</u>rojects</span></a></li>' +
                        '<li class="separator"></li>' +
                        '<li><a href="https://www.youtube.com/watch?v=8GW6sLrK40k" target="_blank"><img class="nav-icon" src="img/muzak.png" alt=""><span><u>N</u>ostalgia</span></a></li>' +
                    '</ul>' +
                '</nav>' +
                '<button class="start-btn" id="start-btn">' +
                    '<img src="img/start1.gif" alt="Start">' +
                '</button>' +
            '</div>' +
            '<div class="clock-area" id="clock"></div>';

        var taskbar = document.getElementById('taskbar');
        if (taskbar) taskbar.innerHTML = html;
    }

    renderTaskbar();

    var startBtn = document.getElementById('start-btn');
    var startMenu = document.getElementById('start-menu');

    function closeStartMenu() {
        if (startMenu) startMenu.classList.remove('open');
        if (startBtn) startBtn.classList.remove('active');
    }

    if (startBtn && startMenu) {
        startBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            startMenu.classList.toggle('open');
            startBtn.classList.toggle('active');
        });
        startMenu.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }

    // Global click: close start menu + handle window controls (delegated)
    document.addEventListener('click', function (e) {
        closeStartMenu();

        var btn = e.target.closest('.window-controls button');
        if (!btn) return;
        var win = btn.closest('.win95-window');
        if (!win) return;

        switch (btn.getAttribute('aria-label')) {
            case 'Close':
                window.location.href = 'index.html';
                break;
            case 'Minimize':
                win.classList.toggle('minimized');
                win.classList.remove('maximized');
                break;
            case 'Maximize':
                win.classList.toggle('maximized');
                win.classList.remove('minimized');
                break;
        }
    });

    // Escape closes start menu
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeStartMenu();
    });

    // Clock
    var clockEl = document.getElementById('clock');
    function updateClock() {
        if (clockEl) clockEl.textContent = new Date().toLocaleTimeString();
    }
    updateClock();
    setInterval(updateClock, 1000);
})();
