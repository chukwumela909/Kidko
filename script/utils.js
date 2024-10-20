const dialogContainer = document.getElementById('dialog-container');
const dialogBox = document.getElementById('dialog-box');
const dialogTitle = document.getElementById('dialog-title');
const dialogMessage = document.getElementById('dialog-message');
const dialogConfirm = document.getElementById('dialog-confirm');
const dialogCancel = document.getElementById('dialog-cancel');
const dialogIcon = document.getElementById('dialog-icon');

function showDialog(title, message, iconType, onConfirm, onCancel) {
    // Set the dialog title and message
    dialogTitle.textContent = title;
    dialogMessage.textContent = message;

    // Set the dialog icon class based on the icon type
    dialogIcon.className = 'dialog-icon ' + iconType; // iconType should be 'success' or 'error'

    // Set the dialog confirm and cancel button click events
    dialogConfirm.onclick = onConfirm;
    dialogCancel.onclick = onCancel;

    // Show the dialog container
    dialogContainer.style.display = 'block';
}

function hideDialog() {
    // Hide the dialog container
    dialogContainer.style.display = 'none';
}