(() => {
  'use strict';
  const button = document.getElementById('install-app');
  const help = document.getElementById('install-help');
  const status = document.getElementById('offline-status');
  let invitation = null;
  const installed = () => {
    invitation = null;
    button.textContent = 'Application installée · aide';
  };
  if (matchMedia('(display-mode: standalone)').matches || navigator.standalone) installed();
  window.addEventListener('appinstalled', installed);
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault(); invitation = event; button.textContent = 'Installer l’application';
  });
  button.addEventListener('click', async () => {
    if (!invitation) { help.open = !help.open; return; }
    const choice = invitation; invitation = null;
    try { await choice.prompt(); await choice.userChoice; }
    catch { help.open = true; }
    button.textContent = 'Installer / mode d’emploi';
  });
  if (!('serviceWorker' in navigator) || !window.isSecureContext || location.protocol === 'file:') {
    status.textContent = 'Le mode installable et hors connexion nécessite un lien HTTPS (ou localhost pour les essais).';
    return;
  }
  const showReady = () => { status.textContent = 'Jeu prêt hors connexion · voix française locale nécessaire pour le son'; };
  navigator.serviceWorker.addEventListener('controllerchange', showReady);
  navigator.serviceWorker.register('./hi3d-sw.js', { scope: './' }).then(async () => {
    await navigator.serviceWorker.ready;
    if (navigator.serviceWorker.controller) showReady();
  }).catch(() => {
    status.textContent = 'Le mode hors connexion n’a pas pu être préparé. Le jeu reste accessible en ligne. Recharge la page pour réessayer.';
  });
})();
