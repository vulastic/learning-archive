function initialize() {
    const phoneNumbers = document.querySelectorAll(".phoneNumber");
    const tokenSend = document.getElementById("tokenSend");
    
    phoneNumbers.forEach((input, index) => {
        input.addEventListener("input", () => {
            input.value = input.value.replace(/\D/g, "");
            if (input.value.length === input.maxLength) {
                if (index < phoneNumbers.length - 1)
                    phoneNumbers[index + 1].focus();
                else {
                    tokenSend.disabled = false;
                }
            }
            else {
                tokenSend.disabled = true;
            }
        });
    });
    
    const tokenNumber = document.getElementById("tokenNumber");
    const tokenCheck = document.getElementById("tokenCheck");
    
    let time = 180;
    let interval = null;
    let tokenChecked = false;
    const timer = document.getElementById("timer");
    tokenSend.addEventListener("click", () => {
        tokenNumber.innerText = Math.floor(Math.random() * 1000000).toString().padStart(6, "0");
        tokenCheck.disabled = false;
        
        interval = setInterval(() => {
            const minutes = Math.floor(time / 60);
            const secondsLeft = time % 60;
            timer.textContent = `${minutes}:${String(secondsLeft).padStart(2, "0")}`;
            
            if (time === 0) {
                alert("인증에 실패하였습니다");
                tokenNumber.textContent = "000000";
                timer.textContent = "3:00";
                tokenCheck.disabled = true;
                clearInterval(interval);
            }
            
            --time;
        }, 1000);
    });
    
    let mask = 0;
    const submit = document.getElementById("submit");
    tokenCheck.addEventListener("click", () => {
        if (interval != null) {
            alert("인증이 완료되었습니다.");
            clearInterval(interval);
            mask |= 1 << 0;
            if (mask === 7) {
                submit.disabled = false;
            }
        }
    });

    const state = document.getElementById("state");
    state.addEventListener("change", () => {
        if (state.value !== "") {
            mask |= 1<< 1;
            if (mask === 7) {
                submit.disabled = false;
            }
        }
    });

    const radio = document.querySelectorAll('input[name="gender"]');
    radio.forEach((item) => {
        item.addEventListener("change", () => {
            mask |= 1 << 2;
            if (mask === 7) {
                submit.disabled = false;
            }
        });
    });

    submit.addEventListener("click", sumbmitValidity);
}

function sumbmitValidity() {
    let complete = true;
    const email = document.getElementById("email");
    if (email.value.trim() !== "" && email.checkValidity())
        email.classList.remove("invalid");
    else {
        email.classList.add("invalid");
        complete = false;
    }

    const name = document.getElementById("name");
    if (name.value.trim() !== "") {
        name.classList.remove("invalid");
    }
    else {
        name.classList.add("invalid"); 
        complete = false;
    }

    const passwd = document.getElementById("password");
    const passwdCheck = document.getElementById("passwordCheck");
    if (passwd.value.trim() !== "" && passwd.value === passwdCheck.value) {
        passwd.classList.remove("invalid");
        passwdCheck.classList.remove("invalid");
    }
    else {
        passwd.classList.add("invalid");
        passwdCheck.classList.add("invalid");
        complete = false;
    }

    if (complete === true)
        alert("가입을 축하합니다!");
}

initialize();