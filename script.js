// Requisito 3 - Botão que valida o formulário
function validar() {
  const email = document.getElementById('input-email');
  const senha = document.getElementById('input-senha');

  const emailValue = email.value;
  const senhaValue = senha.value;

  console.log('clicou no botão');
  if (emailValue === 'tryber@teste.com' && senhaValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const button = document.getElementsByTagName('button')[0];
// console.log(button);
button.addEventListener('click', validar);
// Fim Requisito 3

// contador de caracteres
const textArea = document.getElementById('textarea');
const charCounter = document.getElementById('counter');
const maxLength = 500;

function characterCounter() {
  const typedCharacters = textArea.value.length;
  const counter = maxLength - typedCharacters;
  charCounter.textContent = `${counter}/500`; // essa atribuiçao é uma 'template literals', conforme sugerido pelo lint: https://eslint.org/docs/latest/rules/prefer-template
}
textArea.addEventListener('input', characterCounter);
// ref: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event

// Requisito 18 - Crie um botão de "Enviar" para submeter o formulário.
const buttonSend = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

buttonSend.disabled = true;
function stateHandle() {
  console.log(checkbox.checked);
  if (!checkbox.checked) {
    buttonSend.disabled = true;
    buttonSend.style.filter = 'brightness(30%)'; /* mantém o botão escurecido quando desativado */
  } else {
    buttonSend.disabled = false;
    buttonSend.style.filter = 'brightness(100%)'; /* aumenta o brilho do botão quando ativado */
  }
}
checkbox.addEventListener('change', stateHandle);
// Fim Requisito 18 - fonte: https://www.delftstack.com/pt/howto/javascript/javascript-disable-button/  ,  https://www.w3schools.com/jsref/prop_select_disabled.asp

// Requisito 21

const formData = document.querySelectorAll('#form-data p');
const evaluationForm = document.getElementById('evaluation-form');

function checkSelection(input) {
  for (let index = 0; index < input.length; index += 1) {
    if (input[index].checked) {
      return input[index];
    }
    return null;
  }
}

function viewForm() {
  const nomeInput = document.getElementById('input-name');
  const sobrenomeInput = document.getElementById('input-lastname');
  const emailInput = document.getElementById('input-email');
  const casaInput = document.getElementById('house');
  const familiaInput = document.querySelectorAll('#label-family input');
  let materiaInput = document.querySelector('.container-conteudo');
  materiaInput = checkSelection(materiaInput);
  let avaliacaoInput = document.querySelectorAll('.avaliacao input');
  avaliacaoInput = checkSelection(avaliacaoInput);
  const observacoesInput = document.getElementById('textarea');
  evaluationForm.style.display = 'none'; /* esconde o primeiro formulário quando o botão é clicado */
  formData[0].innerText = `Nome: ${nomeInput.value} ${sobrenomeInput.value}`;
  formData[1].innerText = `E-mail: ${emailInput.value}`;
  formData[2].innerText = `Casa: ${casaInput.value}`;
  formData[3].innerText = `Família: ${familiaInput.value}`;
  formData[4].innerText = `Matérias: ${materiaInput.value}`;
  formData[5].innerText = `Avaliação: ${avaliacaoInput.value}`;
  formData[6].innerText = `Observações: ${observacoesInput.textContent}`;
}
// for (let index = 0; index < formData.length; index += 1) {
  // const element = form[index];
//  formData[index].innerText = `Nome: ${nomeInput} ${sobrenomeInput}`;
// }
// formData[0].innerText.style.color = 'red';
// formData.style.display = 'initial';
// form = [Nome, Email, Casa, Familia, Materias, Avaliação, Observações];
// function modifyForm(form) {
// }
// formData.innerHTML = `Nome: ${nomeInput.value} ${sobrenomeInput.value};
// E-mail: ${emailInput.value};
// Casa: ${casaInput.value};
// Família: ${familiaInput.value};
// Matérias: ${materiaInput.value};
// Avaliação: ${avaliacaoInput.value};
// Observações: ${observacoesInput.value}`;

buttonSend.addEventListener('click', viewForm);
