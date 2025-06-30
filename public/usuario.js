function cambiarIdioma(idioma) {
  const textos = {
    es: {
      "user-type": "Cliente Light House",
      "nav-profile": "Mi perfil",
      "nav-status": "Estado de la casa",
      "nav-prediction": "Predicción de consumo",
      "nav-contact": "Contacto con proveedor",
      "nav-settings": "Configuración",
      "nav-logout": "Cerrar sesión",
      "profile-title": "Información del Usuario",
      "btn-edit": "Editar perfil",
      "btn-settings": "Configuración",
      "lang-btn-es": "Español",
      "lang-btn-qu": "Quechua",
      "brand-subtitle": "Acceso energético inteligente",

      // Footer
      "footer-title": "Light House",
      "footer-desc": "Plataforma para monitoreo y gestión de energía en zonas rurales del Perú.",
      "footer-links-title": "Enlaces",
      "footer-contact-title": "Contacto",
      "footer-link-home": "Inicio",
      "footer-link-calculator": "Calculadora",
      "footer-link-suppliers": "Proveedores",
      "footer-link-contact": "Contacto",
      "footer-address": "Av. San Carlos 1980, Huancayo",
      "footer-phone": "(064) 481430",
      "footer-copy": "© 2025 Light House. Todos los derechos reservados."
    },
    qu: {
      "user-type": "Light House runa",
      "nav-profile": "Ñuqaqa",
      "nav-status": "Wasi kaynin",
      "nav-prediction": "Ruwachiy qillqay",
      "nav-contact": "Rimay proveedorwan",
      "nav-settings": "Kamachiy",
      "nav-logout": "Lloqsiy",
      "profile-title": "Runa willaykuna",
      "btn-edit": "Willaykuna hukchay",
      "btn-settings": "Kamachiy",
      "lang-btn-es": "Español",
      "lang-btn-qu": "Runasimi",
      "brand-subtitle": "Yuyaysapa kallpaman yaykuy",

      // Footer
      "footer-title": "Light House",
      "footer-desc": "Qochasapa llikanakuq kawsayta qhawaykuna, Perú llaqtakunapi.",
      "footer-links-title": "T'inkikunam",
      "footer-contact-title": "Rimaykuna",
      "footer-link-home": "Qallariy",
      "footer-link-calculator": "Yupana",
      "footer-link-suppliers": "Ruraykunaq runakuna",
      "footer-link-contact": "Rimaykuy",
      "footer-address": "Av. San Carlos 1980, Huancayo",
      "footer-phone": "(064) 481430",
      "footer-copy": "© 2025 Light House. Llapan derechos chaskisqa."
    }
  };

  const buttons = document.querySelectorAll(".language-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  for (const id in textos[idioma]) {
    const el = document.getElementById(id);
    if (el) {
      const txt = textos[idioma][id];
      if (el.tagName === "A" && el.querySelector("i")) {
        const icon = el.querySelector("i").outerHTML;
        el.innerHTML = `${icon} ${txt}`;
      } else {
        el.textContent = txt;
      }
    }
  }
}
