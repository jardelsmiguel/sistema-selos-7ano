// Configurações do sistema
const LIMITE_ALUNOS = 40;
const SLOTS_POR_MES = 28;

// Array para guardar os alunos cadastrados
let alunos = [];

function adicionarAluno() {
    const inputNome = document.getElementById('nomeAluno');
    const nome = inputNome.value.trim();

    // Validações
    if (nome === '') {
        alert('Digite o nome do aluno.');
        return;
    }

    if (alunos.length >= LIMITE_ALUNOS) {
        alert(`O limite máximo de ${LIMITE_ALUNOS} alunos foi atingido.`);
        return;
    }

    // Adiciona o aluno e limpa o input
    alunos.push(nome);
    inputNome.value = '';
    
    // Atualiza a tela
    renderizarDashboard();
}

function renderizarDashboard() {
    const dashboard = document.getElementById('dashboard');
    dashboard.innerHTML = ''; // Limpa a tela antes de redesenhar

    alunos.forEach((aluno, index) => {
        // Cria o card do aluno
        const card = document.createElement('div');
        card.className = 'aluno-card';
        
        // Nome do aluno
        const titulo = document.createElement('h3');
        titulo.textContent = aluno;
        card.appendChild(titulo);

        // Cria a grade de slots
        const slotsGrid = document.createElement('div');
        slotsGrid.className = 'slots-grid';

        // Gera os 28 slots usando um laço de repetição
        for (let i = 0; i < SLOTS_POR_MES; i++) {
            const slot = document.createElement('div');
            slot.className = 'slot';
            slot.id = `aluno-${index}-slot-${i}`;
            
            // Função pronta para o futuro: clicar no slot para adicionar o PNG do selo
            slot.onclick = () => {
                alert(`Você clicou no slot ${i + 1} do aluno ${aluno}`);
            };

            slotsGrid.appendChild(slot);
        }

        // Monta o card na tela
        card.appendChild(slotsGrid);
        dashboard.appendChild(card);
    });
}

function encerrarMes() {
    if (confirm('Tem certeza que deseja encerrar o mês? Isso vai zerar a tela.')) {
        alunos = [];
        renderizarDashboard();
    }
}