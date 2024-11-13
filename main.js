const form = document.getElementById('valida-num');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const containerMensagem = document.querySelector('.message');

    if (campoB.value > campoA.value){
        mensagem = `${campoB.value} é maior que ${campoA.value}`;
        containerMensagem.style.backgroundColor = 'green';
    } else {
        mensagem = `${campoB.value} não é maior que ${campoA.value}`;
        containerMensagem.style.backgroundColor = 'red';
    }

    containerMensagem.innerHTML = mensagem;
    containerMensagem.style.display = 'block';

    campoA.value = '';
    campoB.value = '';
})