
const form = document.querySelector('form');
const submit = document.querySelector('.submit');
const list = document.querySelector('.oList');


submit.addEventListener('click', e => {
  e.preventDefault();

  const userInput = form.field.value.trim();
  
  if (userInput.length){
    
    const html = `
    <li>
    <span>${userInput}</span>
    <button class="delete">Delete</button>
    </li>`;
    list.innerHTML += html;
    form.reset();
  }
});

const saveItems = () => {
  localStorage.setItem('saved', list.innerHTML)
}

window.addEventListener('beforeunload', () => {
  saveItems()
});

const data = localStorage.getItem('saved');


window.addEventListener('load', () => {
  list.innerHTML += data;
})

list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove()
  };
});

//