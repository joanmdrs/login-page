const submit = document.querySelector("#button-sign-in");
const message_confirm = document.querySelector("#confirm");

submit.addEventListener('click', (e) => {
    e.preventDefault();
    message_confirm.style.display = "flex"
    setTimeout(() => {
        message_confirm.style.display = "none"
    }, 7000);
})