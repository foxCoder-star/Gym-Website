document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const msg = document.getElementById('form-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  msg.className = 'form-msg';
  msg.textContent = '';

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || name.length > 100) return fail('Please enter your name.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) return fail('Please enter a valid email.');
  if (!message || message.length > 1000) return fail('Please share a bit about your goals.');

  const btn = form.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Sending...';

  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = original;
    form.reset();
    msg.className = 'form-msg success';
    msg.textContent = "We'll be in touch — a coach will reach out within 24 hours.";
  }, 700);

  function fail(text){
    msg.className = 'form-msg error';
    msg.textContent = text;
  }
});
