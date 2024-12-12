    window.addEventListener('scroll', function() 
    {
        // Get the position of the Skills section
        const skillsSection = document.querySelector('#skills');
        const aboutSection = document.querySelector('#aboutme');
        const sdgSection = document.querySelector('#sdg');

        const nav = document.querySelector('nav');
        const navLinks = document.querySelectorAll('nav a');
        const dropDown = document.querySelectorAll('li i');
        const dropContent = document.querySelectorAll('li a');

        
        const section1Position = aboutSection.getBoundingClientRect().top;
        const section2Position = skillsSection.getBoundingClientRect().top;
        const section3Position = sdgSection.getBoundingClientRect().top;

        // Change color when the section is in view
        if (section1Position <= window.innerHeight / 10) {
             // Change navbar background
            navLinks.forEach(link => link.style.color = '#aa0909'); // Change link color
            dropDown.forEach(link => link.style.color = '#aa0909'); // Change link color
            dropContent.forEach(link => link.style.color = '#aa0909'); // Change link color
        } 
        
        else if (section2Position <= window.innerHeight / 10) {
            // Change navbar background
           navLinks.forEach(link => link.style.color = '#aa0909'); // Change link color
           dropDown.forEach(link => link.style.color = '#aa0909'); // Change link color
           dropContent.forEach(link => link.style.color = '#aa0909'); // Change link color
       } 
        else if (section3Position <= window.innerHeight / 10) {
            // Change navbar background
            nav.style.backgroundColor = 'transparent'; // Revert to original
           navLinks.forEach(link => link.style.color = 'white'); // Change link color
           dropDown.forEach(link => link.style.color = 'white'); // Change link color
           dropContent.forEach(link => link.style.color = 'white'); // Change link color
       } 
       
        else {
            nav.style.backgroundColor = 'transparent'; // Revert to original
            navLinks.forEach(link => link.style.color = 'white'); // Revert link color
            dropDown.forEach(link => link.style.color = 'white'); // Revert link color
            dropContent.forEach(link => link.style.color = 'white'); // Revert link color
        }
    });

    //Video Slider Navigation
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".sdg-content");

    var sliderNav = function(manual){
        btns.forEach((btn) => {
            btn.classList.remove("active");
        })

        slides.forEach((slide) => {
            slide.classList.remove("active");
        })

        contents.forEach((content) => {
            content.classList.remove("active");
        })

        btns[manual].classList.add("active");
        slides[manual].classList.add("active");
        contents[manual].classList.add("active");
    }

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i);
        })
    });

    // Menu Bar
    const toggleBtn = document.querySelector('.toggle_btn');
        const toggleBtnIcon = document.querySelector('.toggle_btn i');
        const dropDownMenu = document.querySelector('.dropdown_menu');

        toggleBtn.onclick = function(){
            dropDownMenu.classList.toggle('open');
            const isOpen = dropDownMenu.classList.contains('open');

            toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars'
            
        }

