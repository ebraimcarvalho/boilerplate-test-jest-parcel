export const hello = () => 'Hello World!';

let text = document.createElement('h3');
text.textContent = hello();
document.body.appendChild(text);