const programs = [
    "25/LDN/RAX01/F1/001", "25/LDN/RAX01/F1/002", "25/LDN/RAX01/F1/003", "25/LDN/RAX01/F1/004", "25/LDN/RAX01/F1/005", 
    "25/LDN/RAX01/F1/006", "25/LDN/RAX01/F1/007", "25/LDN/RAX01/F1/008", "25/LDN/RAX01/F1/009", "25/LDN/RAX01/F1/010"
];

document.addEventListener("DOMContentLoaded", function() {
    const programList = document.getElementById('program-list');
    programs.forEach(program => {
        const item = document.createElement('div');
        item.textContent = program;
        item.classList.add('p-2', 'bg-white', 'shadow', 'rounded', 'cursor-pointer', 'mb-2');
        item.setAttribute('draggable', true);
        programList.appendChild(item);
    });
    document.getElementById('start-ranking').classList.remove('hidden');
});

document.getElementById('start-ranking').addEventListener('click', function() {
    document.getElementById('tier-section').classList.add('hidden');
    document.getElementById('ranking-section').classList.remove('hidden');
});