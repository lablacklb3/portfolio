// =========================
// AOS INIT
// =========================
AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-out-cubic'
});

// =========================
// SWITCH LANGUE FR / EN
// =========================
const btnFR = document.querySelector('#btn-fr');
const btnEN = document.querySelector('#btn-en');

function switchLanguage(lang) {
  const frSections = document.querySelectorAll('[id$="-fr"]');
  const enSections = document.querySelectorAll('[id$="-en"]');

  if (lang === 'fr') {
    enSections.forEach(el => el.style.opacity = 0);
    frSections.forEach(el => { el.style.display = 'block'; el.style.opacity = 0; });

    setTimeout(() => {
      frSections.forEach(el => el.style.opacity = 1);
      enSections.forEach(el => el.style.display = 'none');
    }, 100);

    btnFR.classList.add('active');
    btnEN.classList.remove('active');
  } else {
    frSections.forEach(el => el.style.opacity = 0);
    enSections.forEach(el => { el.style.display = 'block'; el.style.opacity = 0; });

    setTimeout(() => {
      enSections.forEach(el => el.style.opacity = 1);
      frSections.forEach(el => el.style.display = 'none');
    }, 100);

    btnEN.classList.add('active');
    btnFR.classList.remove('active');
  }
}

btnFR.addEventListener('click', () => switchLanguage('fr'));
btnEN.addEventListener('click', () => switchLanguage('en'));
