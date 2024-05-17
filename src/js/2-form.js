const formEl = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };
const LS_KEY = 'feedback-form-state';

formEl.addEventListener('submit', handleFormSub);
formEl.addEventListener('input', handleFormInp);
document.addEventListener('DOMContentLoaded', renderPage);

function handleFormSub(e) {
  e.preventDefault();

  const newForm = new FormData(formEl);

  formData.email = newForm.get('email').trim();
  formData.message = newForm.get('message').trim();

  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);

  localStorage.removeItem(LS_KEY);
  e.target.reset();
}

function handleFormInp(e) {
  const form = new FormData(formEl);

  formData.email = form.get('email').trim();
  formData.message = form.get('message').trim();

  const json = JSON.stringify(formData);
  localStorage.setItem(LS_KEY, json);
}

function renderPage() {
  const lsData = localStorage.getItem(LS_KEY);
  try {
    const result = JSON.parse(lsData);
    formEl.elements.email.value = result.email;
    formEl.elements.message.value = result.message;
  } catch {
    console.log(error);
  }
}
