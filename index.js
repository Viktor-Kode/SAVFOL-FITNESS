

        const menuIcon = document.getElementById('navbar');
        const navLinks = document.getElementById('navlinks');

        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('activeNavLink');
        });