const subjects = {
    webTech: ["Servlets", "JSP", "Basic HTML", "Bootstrap", "Data Storage and Manipulation"],
    dbms: ["Basics", "SQL", "PL/SQL", "ACID Properties", "Views and Joins"],
    ml: ["Designing Learning Systems", "Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Clustering"],
    ai: ["Deep Learning", "Robotics", "NLP", "RAG", "IoT", "Recommender Systems"],
    imageProcessing: ["Digital Image Fundamentals", "Image Enhancement", "Image Restoration and Segmentation", "Image Representation, Recognition", "Image Compression"]
};


let selectedQuestions = [];
let currentQuestionIndex = 0;
let reviewedQuestions = new Set(); 
let timeRemaining = 900; 
let timerInterval;
let userAnswers = [];

function loadChapters() {
    const subject = document.getElementById('subjectSelect').value;
    const chapterSelect = document.getElementById('chapterSelect');
    chapterSelect.innerHTML = ''; 

    if (subject in subjects) {
        subjects[subject].forEach(chapter => {
            const option = document.createElement('option');
            option.value = chapter;
            option.textContent = chapter;
            chapterSelect.appendChild(option);
        });
        document.getElementById('chapterSelectContainer').style.display = 'block';
        document.getElementById('startTestButton').style.display = 'block'; 
    }
}
