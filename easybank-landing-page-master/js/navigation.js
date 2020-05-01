const hamburger = document.getElementById('mobileToggle');

function openMenu(e) {
    const hamburger = document.getElementById('mobileToggle');
    const openIcon = document.getElementById('openIcon');
    const closeIcon = document.getElementById('closeIcon');
    const mainNav = document.getElementById('mainNav');
    const overlay = document.getElementById('overlay');
    e.preventDefault();
    if (hamburger.classList.contains('close')) {
        hamburger.classList.remove('close');
        mainNav.style.display ="block";
        overlay.style.display ="block";
        closeIcon.style.display="block";
        openIcon.style.display="none";
    } else {
        hamburger.classList.add('close');
        mainNav.style.display ="none";
        closeIcon.style.display="none";
        openIcon.style.display="block";
        overlay.style.display ="none";
    }
    
}

hamburger.addEventListener('click', openMenu);