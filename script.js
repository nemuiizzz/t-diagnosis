const questions = [
    {
        question: "Q1. 第一印象、どんな風に思われがち？",
        answers: ["明るくて話しかけやすい！", "クールでちょっと近寄りがたい", "ふんわりしてて癒し系"]
    },
    {
        question: "Q2. SNSの投稿スタイルは？",
        answers: ["ストーリーや写真をよく投稿する", "投稿は少ないけど内容にこだわる", "見る専。投稿は気分次第！"]
    },
    {
        question: "Q3. 自分の笑い方は？",
        answers: ["爆笑タイプ！すぐツボる", "口元だけ笑って目が笑ってないって言われる", "ケラケラって感じの癒し笑い"]
    },
    {
        question: "Q4. 人から褒められるポイントは？",
        answers: ["表情が豊かでリアクションがいい", "落ち着きがある・知的な雰囲気", "親しみやすくて自然体なところ"]
    },
    {
        question: "Q5. 学校や職場ではどんなポジション？",
        answers: ["中心で盛り上げ役！", "一歩引いたポジで、周囲を見てる", "和ませ担当。どこかにいると安心感"]
    },
    {
        question: "Q6. 写真を撮るときの自分は？",
        answers: ["バッチリポーズ！自分の見せ方知ってる", "ちょっと照れるけど雰囲気でキメる", "あまり映りを気にしない。ナチュラルが一番"]
    },
    {
        question: "Q7. 好きな映画のジャンルは？",
        answers: ["ラブコメ・青春もの！", "サスペンス・ミステリー・アート系", "ファンタジーやアニメ系"]
    },
    {
        question: "Q8. 自分の顔の特徴で強みだと思うところは？",
        answers: ["ぱっちり目・明るい表情", "シャープな輪郭や雰囲気", "もちっとした肌や丸い顔立ち"]
    },
    {
        question: "Q9. 芸能人に例えると、自分の声やしゃべり方は？",
        answers: ["ハキハキ！テンション高めで通る声", "低音系。落ち着いた話し方", "ゆったりで少し甘めな印象"]
    },
    {
        question: "Q10. モテるタイプの友達、どんな人？",
        answers: ["明るくて面白くて誰とでも仲良くできる", "静かだけどセンスや雰囲気がある", "優しくて気配りできる癒し系"]
    }
];

const celebrity = {
    name: "春日寿子",
    image: "t-diagnosis/toshiko.jpg"
};

const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const celebrityImage = document.getElementById('celebrity-image');
const celebrityName = document.getElementById('celebrity-name');
const retryButton = document.getElementById('retry-button');
const backButton = document.getElementById('back-button');

let currentQuestionIndex = 0;

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', handleAnswer);
        answersElement.appendChild(button);
    });

    if (currentQuestionIndex > 0) {
        backButton.classList.remove('hidden');
    } else {
        backButton.classList.add('hidden');
    }
}

function handleAnswer() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    celebrityImage.src = celebrity.image;
    celebrityName.textContent = celebrity.name;
    backButton.classList.add('hidden'); // 結果表示中は戻るボタンを非表示
}

function retry() {
    currentQuestionIndex = 0;
    resultContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    showQuestion();
}

function goBack() {
    currentQuestionIndex--;
    showQuestion();
}

retryButton.addEventListener('click', retry);
backButton.addEventListener('click', goBack);

showQuestion();