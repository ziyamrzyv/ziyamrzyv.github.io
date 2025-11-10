// Typing effect
    const typeTarget = document.getElementById('type');
    const toType = "> Junior Technical Support Specialist | Master’s in Computer Engineering";
    let i = 0;
    function type(){
      if(!typeTarget) return;
      if(i <= toType.length){ typeTarget.textContent = toType.slice(0,i); i++; setTimeout(type, 24); }
      else { const c = document.createElement('span'); c.className = 'cursor'; typeTarget.appendChild(c); }
    }
    type();

    // Uptime
    const ORIGIN = new Date('2025-11-09T00:00:00Z');
    function formatDays(ms){ return Math.floor(ms/(1000*60*60*24)) + ' days'; }
    function tickUptime(){
      const val = formatDays(Date.now() - ORIGIN.getTime());
      ['uptimeSide','uptimeMobile','uptimeFoot'].forEach(id=>{ const el = document.getElementById(id); if(el) el.textContent = val; });
    }
    tickUptime(); setInterval(tickUptime, 60_000);

    // Drawer
    const drawer = document.getElementById('drawer');
    document.getElementById('openMenu')?.addEventListener('click', ()=> drawer.classList.add('open'));
    document.getElementById('closeMenu')?.addEventListener('click', ()=> drawer.classList.remove('open'));
    drawer?.addEventListener('click', (e)=>{ if(e.target.tagName === 'A') drawer.classList.remove('open'); });

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // THEME
    const bodyEl = document.body;
    const themeBtn = document.getElementById('themeToggle');
    function applyTheme(mode){ bodyEl.setAttribute('data-theme', mode); }
    function savedTheme(){ return localStorage.getItem('theme'); }
    function setTheme(mode){ localStorage.setItem('theme', mode); applyTheme(mode); }

    const sysLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    applyTheme(savedTheme() || (sysLight ? 'light' : 'dark'));
    if(themeBtn){
      themeBtn.textContent = bodyEl.getAttribute('data-theme') === 'dark' ? '🌗 Theme' : '🌞 Light';
      themeBtn.addEventListener('click', ()=>{
        document.body.classList.add('theme-transition');
        setTimeout(()=> document.body.classList.remove('theme-transition'), 400);
        const next = bodyEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(next);
        themeBtn.textContent = next === 'dark' ? '🌗 Theme' : '🌞 Light';
      });
    }