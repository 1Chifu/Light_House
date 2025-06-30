// Manejo de pestañas
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    
    this.classList.add('active');
    const tabId = this.getAttribute('data-tab');
    document.getElementById(`${tabId}-tab`).classList.add('active');
  });
});
