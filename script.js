
document.getElementById('adicionarTarefaButton').addEventListener('click', adicionarTarefa);
document.getElementById('novaTarefa').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    const tarefaInput = document.getElementById('novaTarefa');
    const textoTarefa = tarefaInput.value.trim();

    if (textoTarefa === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    const listaDeTarefas = document.getElementById('listaDeTarefas');
    const novaTarefa = document.createElement('li');
    novaTarefa.className = 'list-group-item d-flex justify-content-between align-items-center';
    novaTarefa.innerHTML = `
    <span>${textoTarefa}</span>
    <div>
      <button class="btn btn-custom-warning btn-sm mr-2 editarTarefaButton" title="Editar tarefa"><i class="fas fa-edit"></i></button>
      <button class="btn btn-custom-success btn-sm mr-2 concluirTarefaButton" title="Concluir tarefa"><i class="fas fa-check"></i></button>
      <button class="btn btn-custom-danger btn-sm excluirTarefaButton" title="Excluir tarefa"><i class="fas fa-trash"></i></button>
    </div>
  `;

    listaDeTarefas.appendChild(novaTarefa);
    tarefaInput.value = '';

    novaTarefa.querySelector('.editarTarefaButton').addEventListener('click', editarTarefa);
    novaTarefa.querySelector('.concluirTarefaButton').addEventListener('click', concluirTarefa);
    novaTarefa.querySelector('.excluirTarefaButton').addEventListener('click', excluirTarefa);
}

function concluirTarefa(event) {
    const itemTarefa = event.target.closest('li');
    itemTarefa.querySelector('span').classList.toggle('completed');
}

function excluirTarefa(event) {
    const itemTarefa = event.target.closest('li');
    itemTarefa.classList.add('removing');
    setTimeout(() => itemTarefa.remove(), 300);
}

function editarTarefa(event) {
    const itemTarefa = event.target.closest('li');
    const textoTarefa = itemTarefa.querySelector('span').innerText;
    const novoTextoTarefa = prompt('Editar tarefa:', textoTarefa);

    if (novoTextoTarefa !== null && novoTextoTarefa.trim() !== '') {
        itemTarefa.querySelector('span').innerText = novoTextoTarefa.trim();
    }
}

