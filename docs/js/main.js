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

    // Escape key closes start menu
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            startMenu.classList.remove('open');
            startBtn.classList.remove('active');
        }
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
