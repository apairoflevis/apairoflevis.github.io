//Text Animation

const text = baffle(".info");
text.set({
    characters: '▓▓▓ ██░▒░ <░░▓▓ ██▒ ░▓█<░ ▓/▓░ ▒░▒ >▓░▒ ▒/░▒▓▓▓ ██░▒░ <░░▓▓ ██▒ ░▓█<░ ▓/▓░ ▒░▒ >▓░▒ ▒/░▒',
    speed: 200
});
text.start();
text.reveal(3000);



//Modal
var modal = document.getElementById('popModal');

//Close Button
var close = document.getElementsByClassName('close-btn')[0];

//Click Events
close.addEventListener('click', closeModal);

//Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

setTimeout(showModal, 5000);

//Function show modal
function showModal() {
    var m = document.getElementById('popModal');
    m.style.display = "block";
}