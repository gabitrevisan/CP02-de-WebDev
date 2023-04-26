alert("Você acessou a página de quiz. Vamos conhecer um pouco mais sobre vinhos?\nClique no botão 'Iniciar Quiz' para começar.")

function startQuiz() {
    let score = 0;

    let answer1 = prompt("01. Qual dessas uvas é mais usada na produção de vinho tinto?:\nA) Chardonnay\nB) Merlot\nC) Sauvignon Blanc");
    if (answer1.toLowerCase() === "b") {
      score++;
    }

    let answer2 = prompt("02. Qual é a uva mais usada na produção de vinho do Porto?:\nA) Cabernet Sauvignon\nB) Syrah\nC) Touriga Nacional");
    if (answer2.toLowerCase() === "c") {
      score++;
    }

    let answer3 = prompt("03. Qual dessas regiões é mais conhecida pela produção de vinho branco?:\nA) Bordeaux\nB) Napa Valley\nC) Alsácia");
    if (answer3.toLowerCase() === "c") {
      score++;
    }

    let answer4 = prompt("04. Qual é o vinho mais famoso da região da Toscana, na Itália?:\nA) Amarone\nB) Barolo\nC) Chianti");
    if (answer4.toLowerCase() === "c") {
      score++;
    }

    let answer5 = prompt("05. Qual dessas uvas é mais usada na produção de vinho do tipo Chardonnay?:\nA) Chardonnay\nB) Pinot Noir\nC) Malbec");
    if (answer5.toLowerCase() === "a") {
      score++;
    }

    let answer6 = prompt("06. Qual é a região mais famosa pela produção de vinhos espumantes na França?:\nA) Bordeaux\nB) Champagne\nC) Rhône");
    if (answer6.toLowerCase() === "b") {
      score++;
    }

    let answer7 = prompt("07. Qual dessas regiões é mais conhecida pela produção de vinho rosé?:\nA) Provence\nB) Rioja\nC) Mosel");
    if (answer7.toLowerCase() === "a") {
      score++;
    }

    let answer8 = prompt("08. Qual é o país mais conhecido pela produção de vinho do tipo Malbec?:\nA) Argentina\nB) Espanha\nC) Portugal");
    if (answer8.toLowerCase() === "a") {
      score++;
    }

    let answer9 = prompt("09. Qual é a uva mais usada na produção de vinho do tipo Shiraz?:\nA) Cabernet Sauvignon\nB) Merlot\nC) Syrah");
    if (answer9.toLowerCase() === "c") {
      score++;
    }

    let answer10 = prompt("10. Qual é o vinho mais famoso da região do Douro, em Portugal?:\nA) Vinho Verde\nB) Vinho do Porto\nC) Vinho Verdejo");
    if (answer10.toLowerCase() === "b") {
      score++;
    }

    alert(`Você acertou ${score} de 10 perguntas.`);
    alert("Essas eram as respostas corretas:\n01. Qual dessas uvas é mais usada na produção de vinho tinto?: Merlot (B)\n02. Qual é a uva mais usada na produção de vinho do Porto?: Touriga Nacional (C)\n03. Qual dessas regiões é mais conhecida pela produção de vinho branco?: Alsácia(C)\n04. Qual é o vinho mais famoso da região da Toscana, na Itália?: Chianti(C)\n05. Qual dessas uvas é mais usada na produção de vinho do tipo Chardonnay?: Chardonnay(A) \n06. Qual é a região mais famosa pela produção de vinhos espumantes na França?: Champagne (B)\n07. Qual dessas regiões é mais conhecida pela produção de vinho rosé?: Provence (A)\n08. Qual é o país mais conhecido pela produção de vinho do tipo Malbec?: Argentina (A)\n09.Qual é a uva mais usada na produção de vinho do tipo Shiraz?: Syrah (C)\n10. Qual é o vinho mais famoso da região do Douro, em Portugal?: Vinho do Porto (B)");
}
