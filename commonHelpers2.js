import"./assets/modulepreload-polyfill-3cfb730f.js";const a=document.querySelector(".feedback-form"),t={email:"",message:""},m="feedback-form-state";a.addEventListener("submit",o);a.addEventListener("input",r);document.addEventListener("DOMContentLoaded",l);function o(s){s.preventDefault();const e=new FormData(a);if(t.email=e.get("email").trim(),t.message=e.get("message").trim(),t.email===""||t.message==="")return alert("Fill please all fields");console.log(t),localStorage.removeItem(m),s.target.reset()}function r(s){const e=new FormData(a);t.email=e.get("email").trim(),t.message=e.get("message").trim();const n=JSON.stringify(t);localStorage.setItem(m,n)}function l(){const s=localStorage.getItem(m),e=JSON.parse(s);e&&(a.elements.email.value=e.email,a.elements.message.value=e.message)}
//# sourceMappingURL=commonHelpers2.js.map
