// Import stylesheets
import { Person } from './person';
import './style.css';

let pessoa = new Person('Matheus', 'Valencio', 'Fonseca', 29);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
const nomeCompleto: HTMLElement = document.getElementById('nome');
const anoNascimento: HTMLElement = document.getElementById('ano');
appDiv.innerHTML = `<h1>Pessoa</h1>`;
nomeCompleto.innerHTML += ' ' + pessoa.getFullName();
anoNascimento.innerHTML += ' ' + pessoa.getBirthdayYear();
