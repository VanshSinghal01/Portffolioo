
function showContent() {
    let root = document.getElementById("root");
    if (root.style.display === 'none' || root.style.display === '') {
        root.style.display = 'block';
    } else {
        root.style.display = 'none';
    }
}


function goo() {
    window.open("https://drive.google.com/file/d/10PjzSMXCQiHiMUJD2w1tN6s8B0tuo1L_/view?usp=drivesdk", '_blank');
}

function Email() {
    window.open('mailto:singhalvansh74@gmail.com')

}

function showSection(Section, tabElement) {
    var skillsSection = document.getElementById('skills');
    var educationSection = document.getElementById('education');
    var experienceSection = document.getElementById('experience');
    var tablinks = document.getElementsByClassName("tab-link");

    if (Section === 'skills') {
        skillsSection.style.display = 'block';
        educationSection.style.display = 'none';
        experienceSection.style.display = 'none';
    } else if (Section === 'education') {
        educationSection.style.display = 'block';
        skillsSection.style.display = 'none';
        experienceSection.style.display = 'none';
    } else if (Section === 'experience') {
        experienceSection.style.display = 'block';
        skillsSection.style.display = 'none';
        educationSection.style.display = 'none';
    }
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    document.getElementById(Section).classList.add("active-tab");

    tabElement.classList.add("active-link");
    
}
function Upward() {
    const upward = document.getElementById('upward');
    if (window.maxwidth =480) { 
        if (upward.style.height === '100%') {
            upward.style.height = '0'; 
        } else {
            upward.style.height = '100%'; // Expand
        }
    }
}
