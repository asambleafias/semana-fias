// Filtrado de categorías
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.cat-btn');
    const charlas = document.querySelectorAll('.charla');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
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
