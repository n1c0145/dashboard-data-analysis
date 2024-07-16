document.addEventListener('DOMContentLoaded', function() {
    const chartBoxes = document.querySelectorAll('.chart-box');

    chartBoxes.forEach(chartBox => {
        const img = chartBox.querySelector('img');
        const overlay = chartBox.querySelector('.overlay');
        const modal = chartBox.querySelector('.modal');
        const modalImg = chartBox.querySelector('.modal-content');
        const closeBtn = chartBox.querySelector('.close');

        // Mostrar modal con imagen ampliada al hacer clic en overlay
        overlay.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = img.src;
        });

        // Cerrar modal al hacer clic en el botón de cerrar
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        // Ampliar imagen al hacer hover sobre chart-box
        chartBox.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.1)';
        });

        chartBox.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1)';
        });
    });
});