export const hello = () => 'Hello World!';

let text = document.createElement('h3');
text.textContent = hello();
document.body.appendChild(text);

export const add = (num1, num2) => {
  return (typeof num1 === 'number' && typeof num2 === 'number') ? num1 + num2 : null;
};

export const removeSNames = names => {
  return names.filter(name => name.toLowerCase().charAt(0) !== 's');
};