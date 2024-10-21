
//Hide Loading Box (Preloader)
function handlePreloader() {
    if ($('.preloader').length) {
        $('.preloader').delay(200).fadeOut(500);
    }
}

handlePreloader()




const vote_btns = document.querySelectorAll(".vote")

const vote_dialog = document.querySelector(".fixed-dialog")
const voter_name = document.querySelector("#voter_name")
const voter_email = document.querySelector("#voter_email")
const voter_votes = document.querySelector("#voter_votes")
const vote_dialog_proceed = document.querySelector(".submit-btn")
const vote_dialog_cancel = document.querySelector(".cancel-btn")

const account_dialog = document.querySelector(".fixed-dialog-account")
const account_cancel_button = document.querySelector(".cancel-btn-account")
const account_submit_button = document.querySelector(".submit-btn-account")
const receipt_input = document.querySelector("#receipt")
const amount_topay = document.querySelector(".amount")



vote_btns.forEach(button => {
    button.addEventListener('click', () => {
        vote_dialog.style.display = "block"
        vote_dialog_proceed.addEventListener('click', () => {
            if (voter_name.value.trim() === "" || voter_email.value.trim() === "" || voter_votes.value.trim() === "") {
                return Swal.fire({
                    title: "Error",
                    text: 'Input fields cannot be left blank',
                    icon: "error"
                });
            } else {
                localStorage.setItem('voter_name', voter_name.value);
                localStorage.setItem('voter_email', voter_email.value);
                localStorage.setItem('voter_votes', voter_votes.value);
                vote_dialog.style.display = "none";
                amount_topay.innerHTML = "<b>Amount to pay:</b> " + (localStorage.getItem('voter_votes') * 500).toString() + " Naira"
                account_dialog.style.display = "block"
                account_submit_button.addEventListener('click', () => {
                    if (receipt_input.files.length === 0) {
                        return Swal.fire({
                            title: "Error",
                            text: 'Please upload a receipt',
                            icon: "error"
                        });
                    } else {

                        
                        Swal.fire({
                            title: "Success",
                            text: 'Receipt uploaded, you will receive a confirmation mail',
                            icon: "success"
                        });
                        account_dialog.style.display = "none";
                    }
                })
            }
        });

    });
});



vote_dialog_cancel.addEventListener('click', () => {
    vote_dialog.style.display = "none"
})

account_cancel_button.addEventListener('click', () => {
    account_dialog.style.display = "none"
})

