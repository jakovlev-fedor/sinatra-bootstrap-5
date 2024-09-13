// The script author
// https://github.com/404GamerNotFound/bootstrap-5.3-dark-mode-light-mode-switch

document.addEventListener('DOMContentLoaded', (event) => {
    const htmlElement = document.documentElement;
    const switchElement = document.getElementById('darkModeSwitch');

    // Set the default theme to dark if no setting is found in local storage
    const currentTheme = localStorage.getItem('bsTheme') || 'dark';

    htmlElement.setAttribute('data-bs-theme', currentTheme);
    switchElement.checked = currentTheme === 'dark';

    switchElement.addEventListener('change', function () {
        if (this.checked) {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('bsTheme', 'dark');
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('bsTheme', 'light');
        }
    });
});


// Cuctom script for an easter egg
document.addEventListener('DOMContentLoaded', (event) => {
    const htmlElement = document.documentElement;
    const switchElement = document.getElementById('darkModeSwitch');
    const currentTheme = localStorage.getItem('bsTheme') || 'dark';

    let pageCheck = document.getElementById('invitation_call')
    if (pageCheck !== null) {  
        const invitationCall = document.getElementById('invitation_call');
        const invitationText = document.getElementById('invitation_text');
        const invitationHeader = document.getElementById('invitation_header');
        const invitationButton = document.getElementById('invite_button');

        if (currentTheme == 'light') {
            invitationCall.innerText="Zzzzzz...";
            invitationText.innerText="Come back tonight.";
            invitationHeader.classList.remove('bg-info');
            invitationHeader.classList.remove('text-dark');
            invitationHeader.classList.add('bg-secondary');
            invitationHeader.classList.add('text-white');
            invitationButton.classList.add('visually-hidden');
        }
    }

    switchElement.addEventListener('change', function () {
        let pageCheck = document.getElementById('invitation_call')
        if (pageCheck !== null) {  
            const invitationCall = document.getElementById('invitation_call');
            const invitationText = document.getElementById('invitation_text');
            const invitationHeader = document.getElementById('invitation_header');
            const invitationButton = document.getElementById('invite_button');


            if (this.checked) {
                invitationHeader.classList.remove('bg-secondary');
                invitationHeader.classList.remove('text-white');
                invitationHeader.classList.add('bg-info');
                invitationHeader.classList.add('text-dark');
                invitationButton.classList.remove('visually-hidden');
                invitationCall.innerText="Psst!";
                invitationText.innerHTML="Would you like to visit a <a href='/secret/place'>/secret/place</a>?";
            } else {
                invitationCall.innerText="Zzzzzz...";
                invitationText.innerText="Come back tonight.";
                invitationHeader.classList.remove('bg-info');
                invitationHeader.classList.remove('text-dark');
                invitationHeader.classList.add('bg-secondary');
                invitationHeader.classList.add('text-white');
                invitationButton.classList.add('visually-hidden');
            }
        } else if (currentTheme == 'dark') {
            window.location.replace('/logout')
        }
    }); 
});