let questions = [];

fetch("http://localhost:8080/api/questions")
  .then(res => res.json())
  .then(data => {
    questions = data;
    loadQuiz();
  })
  .catch(() => {
    // fallback if backend is not running
    questions = [
      {
        question: "What is Java?",
        options: ["A fruit", "A programming language", "An island", "None"],
        answer: "A programming language"
      },
      {
        question: "Which one is a JavaScript framework?",
        options: ["Laravel", "Django", "React", "Spring Boot"],
        answer: "React"
      }
    ];
    loadQuiz();
  });

function loadQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = ""; // clear previous
  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `
      <p>${i + 1}. ${q.question}</p>
      ${q.options.map(opt =>
        `<label><input type="radio" name="q${i}" value="${opt}"> ${opt}</label>`
      ).join("")}
    `;
    container.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });
  document.getElementById("score").innerText = `Your Score: ${score}/${questions.length}`;
}
