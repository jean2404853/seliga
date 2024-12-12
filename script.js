function startStory() {
    document.getElementById('introduction').classList.add('hidden');
    document.getElementById('chapter').classList.remove('hidden');
    showChapter(1);
}

function showChapter(chapter) {
    const chapterTitle = document.getElementById('chapter-title');
    const chapterText = document.getElementById('chapter-text');
    const choicesDiv = document.getElementById('choices');

    choicesDiv.innerHTML = ''; // Limpa escolhas anteriores

    if (chapter === 1) {
        chapterTitle.innerText = 'Capítulo 1: terere.';
        chapterText.innerText = 'Voçê ja tomou terere?';
        choicesDiv.innerHTML = `
            <button onclick="showChapter(2)">Sim</button>
            <button onclick="showChapter(3)">Não</button>
        `;
    } else if (chapter === 2) {
        chapterTitle.innerText = 'Capítulo 2:sabor';
        chapterText.innerText = 'Qual sabor você prefere?';
        choicesDiv.innerHTML = `
            <button onclick="showChapter(4)">abacaxi</button>
            <button onclick="showChapter(5)">menta</button>
        `;
    } else if (chapter === 3) {
        chapterTitle.innerText = 'Capítulo 3: chimarão';
        chapterText.innerText = 'ja bebeu chimarão doce?';
        choicesDiv.innerHTML = `
            <button onclick="showChapter(1)">sim</button>
        `;
    } else if (chapter === 4) {
        chapterTitle.innerText = 'Capítulo 4:sabor ';
        chapterText.innerText = 'ja bebeu da erva Baita erva mate?';
        choicesDiv.innerHTML = `
            <button onclick="showChapter(1)">não</button>
        `;
    } else if (chapter === 5) {
        chapterTitle.innerText = 'Capítulo 5: Um Adeus';
        chapterText.innerText = 'tchal';
        choicesDiv.innerHTML = `
            <button onclick="showChapter(1)">tchal</button>
        `;
    }
}
