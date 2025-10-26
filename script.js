// MODO OSCURO - Toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const toggleIcon = themeToggle.querySelector('.toggle-icon');
    const toggleText = themeToggle.querySelector('.toggle-text');
    
    // Verificar preferencia guardada o del sistema
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Aplicar tema inicial
    applyTheme(savedTheme);
    
    // Event listener para el toggle
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        if (theme === 'dark') {
            toggleIcon.textContent = '☀️';
            toggleText.textContent = 'Modo Claro';
        } else {
            toggleIcon.textContent = '🌙';
            toggleText.textContent = 'Modo Oscuro';
        }
    }
    
    // Filtrado de categorías (tu código original)
    const filterButtons = document.querySelectorAll('.cat-btn');
    const charlas = document.querySelectorAll('.charla');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-category');
            
            charlas.forEach(charla => {
                if (filter === 'all' || charla.getAttribute('data-category').includes(filter)) {
                    charla.style.display = 'grid';
                } else {
                    charla.style.display = 'none';
                }
            });
        });
    });
});
