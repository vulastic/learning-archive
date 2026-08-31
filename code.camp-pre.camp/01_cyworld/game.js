function initialize() {
    const lottoCount = 6;

    const lottoSpans = [];
    const lottoResult = document.getElementById("lotto_result");
    for (let i = 0; i < lottoCount; ++i) {
        const span = document.createElement("span");
        lottoResult.appendChild(span);
        lottoSpans.push(span);
    }

    document.getElementById("word_button").addEventListener("click", () => {
        const input = document.getElementById("word_input");
        const myword = input.value.trim();
        if (myword.length === 0) {
            alert("단어를 입력해 주세요.");
            return;
        }

        const word = document.getElementById("word");
        const result = document.getElementById("word_result");

        const firstChar = myword.at(0);
        const lastChar = word.textContent.at(-1);
        if (firstChar === lastChar) {
            word.textContent = myword;
            result.textContent = "정답입니다!";
        }
        else {
            result.textContent = "틀렸습니다!";
        }
        input.value = "";
    });

    document.getElementById("lotto_button").addEventListener("click", () => {
        const numbers = Array.from({ length: 45 }, (_, i) => i + 1);

        for (let i = numbers.length - 1; i > 0; --i) {
            const j = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }

        const lottoNumbers = numbers.slice(0, lottoCount);
        lottoNumbers.sort((a, b) => a - b);

        for(let i = 0; i < lottoCount; ++i) {
            lottoSpans[i].textContent = lottoNumbers[i];
        }
    });
}

initialize();