document.querySelectorAll('.toggle-switch input').forEach(switchInput => {
  switchInput.addEventListener('change', function () {
    const deviceCard = this.closest('.device-card');
    const statusElement = deviceCard.querySelector('.device-status');

    if (this.checked) {
      statusElement.textContent = 'Encendido';
      statusElement.classList.remove('status-off');
      statusElement.classList.add('status-on');
    } else {
      statusElement.textContent = 'Apagado';
      statusElement.classList.remove('status-on');
      statusElement.classList.add('status-off');
    }

    console.log(`Dispositivo ${deviceCard.querySelector('.device-name').textContent} cambiado a ${this.checked ? 'ON' : 'OFF'}`);
  });
});
