// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for nav links
document.querySelectorAll('a href^="#"').forEach(link=>{
    link.addEventListener('click',e=>{
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault(); // Stops the sudden jump
            target.scrollIntoView({behavior:'smooth'});
        }
    });
});