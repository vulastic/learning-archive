function initialize() {
    document.getElementById("word_button").addEventListener("click", () => {
        const input = document.getElementById("word_input");
        const myword = input.value;
        if (myword.length <= 0) {
            alert("단어를 입력해 주세요.");
            return;
        }

        const word = document.getElementById("word");
        const result = document.getElementById("word_result");
        if (myword.at(0) === word.textContent.at(word.textContent.length - 1)) {
            word.textContent = myword;
            result.textContent = "정답입니다!";
        }
        else {
            result.textContent = "틀렸습니다!";
        }
        input.value = "";
    });

    document.getElementById("lotto_button").addEventListener("click", () => {
        const numbers = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
            31, 32, 33, 34 ,35 ,36, 37, 38, 39, 40, 
            41, 42, 43, 44, 45];

        for (let i = numbers.length - 1; i > 0; --i) {
            const j = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }

        let i = 0;
        const spans = document.getElementById("lotto_result").querySelectorAll("span");
        spans.forEach((n) => {
            n.textContent = numbers[i++];
        });
    });
}

initialize();