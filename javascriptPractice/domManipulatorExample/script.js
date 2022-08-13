const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
const pTag = document.createElement('p');
const pTagText = document.createTextNode("Hey I'm red");
pTag.appendChild(pTagText);
const element = document.getElementById("new");
element.appendChild(pTag);
const h3 = document.createElement('h3');
const h3Text = document.createTextNode("I'm a blue h3!")
h3.appendChild(h3Text);
element.appendChild(h3);
