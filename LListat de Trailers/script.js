document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById('mainVideo');
    const titolPeli = document.getElementById('titolPeli');
    
    // --- LLEGIR LA URL (VÍDEO I SUBTÍTOLS) ---
    const urlParams = new URLSearchParams(window.location.search);
    const urlFile = urlParams.get('file');
    const urlTitle = urlParams.get('title');
    
    const urlSubCa = urlParams.get('subca');
    const urlSubEs = urlParams.get('subes');
    const urlSubEn = urlParams.get('suben');

    // Si hi ha dades a la URL, canviem el vídeo i els subtítols
    if (urlFile && urlTitle) {
        video.src = urlFile;
        titolPeli.textContent = urlTitle;
        
        // Busquem les etiquetes <track> per ID
        const trackCa = document.getElementById('trackCa');
        const trackEs = document.getElementById('trackEs');
        const trackEn = document.getElementById('trackEn');
        
        // Només els modifiquem si la URL porta l'arxiu i l'etiqueta existeix
        if (trackCa && urlSubCa) trackCa.src = urlSubCa;
        if (trackEs && urlSubEs) trackEs.src = urlSubEs;
        if (trackEn && urlSubEn) trackEn.src = urlSubEn;

        // Recarreguem el vídeo amb les noves pistes
        video.load();
    }

    // --- CONTROLS DEL REPRODUCTOR ---
    const btnPlayPause = document.getElementById('btnPlayPause');
    const btnMute = document.getElementById('btnMute');
    const btnRewind = document.getElementById('btnRewind');
    const btnForward = document.getElementById('btnForward');
    const btnFullscreen = document.getElementById('btnFullscreen');
    const progressWrapper = document.getElementById('progressWrapper');
    const progressFill = document.getElementById('progressFill');
    const currentTimeDisplay = document.getElementById('currentTime');
    const totalTimeDisplay = document.getElementById('totalTime');
    const selectLanguage = document.getElementById('selectLanguage');
    const selectSpeed = document.getElementById('selectSpeed');
    const videoContainer = document.querySelector('.video-container');

    // Play / Pause
    btnPlayPause.addEventListener('click', () => {
        if (video.paused) { video.play(); btnPlayPause.textContent = 'Pause'; }
        else { video.pause(); btnPlayPause.textContent = 'Play'; }
    });

    // Mute
    btnMute.addEventListener('click', () => {
        video.muted = !video.muted;
        btnMute.textContent = video.muted ? 'Unmute' : 'Mute';
    });

    // Endavant / Enrere
    btnRewind.addEventListener('click', () => video.currentTime -= 10);
    btnForward.addEventListener('click', () => video.currentTime += 10);

    // Barra de progrés i temps
    function formatTime(s) {
        if (isNaN(s)) return "00:00"; // Evita errors si no ha carregat
        const min = Math.floor(s / 60);
        const sec = Math.floor(s % 60);
        return `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
    }

    video.addEventListener('loadedmetadata', () => {
        totalTimeDisplay.textContent = formatTime(video.duration);
    });

    video.addEventListener('timeupdate', () => {
        currentTimeDisplay.textContent = formatTime(video.currentTime);
        progressFill.style.width = `${(video.currentTime / video.duration) * 100}%`;
    });

    // Click a la barra (Seeking)
    progressWrapper.addEventListener('click', (e) => {
        const rect = progressWrapper.getBoundingClientRect();
        video.currentTime = ((e.clientX - rect.left) / rect.width) * video.duration;
    });

    // Idiomes (Subtítols)
    selectLanguage.addEventListener('change', (e) => {
        const lang = e.target.value;
        for (let i = 0; i < video.textTracks.length; i++) {
            video.textTracks[i].mode = (lang !== 'off' && video.textTracks[i].language === lang) ? 'showing' : 'hidden';
        }
    });

    // Velocitat
    selectSpeed.addEventListener('change', (e) => {
        video.playbackRate = parseFloat(e.target.value);
    });

    // Pantalla Completa
    btnFullscreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            videoContainer.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });
});

