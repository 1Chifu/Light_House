document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 1. Ocultar formulario
            contactForm.style.display = 'none';
            
            // 2. Mostrar mensaje de confirmación
            const confirmation = document.getElementById('confirmationMessage');
            confirmation.style.display = 'block';
            
            // 3. Opcional: Resetear después de 3 segundos
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                confirmation.style.display = 'none';
            }, 3000);
            
            // 4. Aquí iría tu código real para enviar el formulario
            // Ejemplo con Fetch API:
            /*
            fetch('tu-endpoint.php', {
                method: 'POST',
                body: new FormData(contactForm)
            })
            .then(response => {
                if (!response.ok) throw new Error('Error en el envío');
                // Mostrar confirmación solo si el envío fue exitoso
                showConfirmation();
            })
            .catch(error => {
                console.error('Error:', error);
                // Mostrar mensaje de error
                alert('Error al enviar el mensaje');
                contactForm.style.display = 'block';
            });
            */
        });
    }
});