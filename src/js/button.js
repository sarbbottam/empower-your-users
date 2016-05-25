function surprise() {
  alert('surprised'); // eslint-disable-line no-alert
}

Array.from(document.querySelectorAll('.button')).forEach(node => {
  node.addEventListener('click', surprise);
});
