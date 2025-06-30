document.getElementById('provider-contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const urgency = document.getElementById('urgency').value;

  alert(
    `Ticket creado exitosamente:\nAsunto: ${subject}\nUrgencia: ${urgency}\n\nGracias por tu mensaje. El proveedor se comunicará contigo pronto.`
  );

  console.log('Mensaje enviado al proveedor:', { subject, message, urgency });

  this.reset();
});
