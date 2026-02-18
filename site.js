function toggleLang(lang) {
    const ptElements = document.querySelectorAll('.lang-pt');
    const enElements = document.querySelectorAll('.lang-en');
    const btnPt = document.getElementById('btn-pt');
    const btnEn = document.getElementById('btn-en');

    if (lang === 'en') {
        // Esconde PT, Mostra EN
        ptElements.forEach(el => el.classList.add('hidden-lang'));
        enElements.forEach(el => el.classList.remove('hidden-lang'));
        
        // Atualiza botões
        if (btnEn) { btnEn.classList.add('active-lang'); btnEn.setAttribute('aria-pressed', 'true'); }
        if (btnPt) { btnPt.classList.remove('active-lang'); btnPt.setAttribute('aria-pressed', 'false'); }
        // Atualiza atributo lang do documento
        try { document.documentElement.lang = 'en'; } catch (e) {}
        
        // Salva preferência
        localStorage.setItem('preferredLang', 'en');
    } else {
        // Esconde EN, Mostra PT
        enElements.forEach(el => el.classList.add('hidden-lang'));
        ptElements.forEach(el => el.classList.remove('hidden-lang'));
        
        // Atualiza botões
        if (btnPt) { btnPt.classList.add('active-lang'); btnPt.setAttribute('aria-pressed', 'true'); }
        if (btnEn) { btnEn.classList.remove('active-lang'); btnEn.setAttribute('aria-pressed', 'false'); }
        // Atualiza atributo lang do documento
        try { document.documentElement.lang = 'pt-BR'; } catch (e) {}
        
        // Salva preferência
        localStorage.setItem('preferredLang', 'pt');
    }
}

// Ao carregar a página, verifica se já existe uma preferência salva
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'pt';
    toggleLang(savedLang);
});

// Adiciona listeners aos botões de linguagem (se presentes)
document.addEventListener('DOMContentLoaded', () => {
    const btnPt = document.getElementById('btn-pt');
    const btnEn = document.getElementById('btn-en');
    if (btnPt) btnPt.addEventListener('click', () => toggleLang('pt'));
    if (btnEn) btnEn.addEventListener('click', () => toggleLang('en'));
});

// Add active highlight behavior to nav links (like the language toggle)
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    if (!navLinks.length) return;

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            navLinks.forEach(list => { list.classList.remove('active-lang'); list.removeAttribute('aria-current'); });
            link.classList.add('active-lang');
            link.setAttribute('aria-current', 'page');
        });
    });

    // Set initial active link based on hash (fallback to #home)
    const currentHash = window.location.hash || '#home';
    const initial = document.querySelector(`nav a[href="${currentHash}"]`) || navLinks[0];
    if (initial) {
        navLinks.forEach(l => l.classList.remove('active-lang'));
        initial.classList.add('active-lang');
        initial.setAttribute('aria-current', 'page');
    }
});

// Ao carregar a página, verifica se já existe uma preferência salva
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'pt';
    toggleLang(savedLang);
});

// Adiciona listeners aos botões de linguagem (se presentes)
document.addEventListener('DOMContentLoaded', () => {
    const btnPt = document.getElementById('btn-pt');
    const btnEn = document.getElementById('btn-en');
    if (btnPt) btnPt.addEventListener('click', () => toggleLang('pt'));
    if (btnEn) btnEn.addEventListener('click', () => toggleLang('en'));
});