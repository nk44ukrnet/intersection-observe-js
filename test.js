const header = document.querySelector('.header');
//console.log(header.getBoundingClientRect());

const headerObserver = new IntersectionObserver((entries, observe) => {
        const [entry] = entries;
        if (!entry.isIntersecting) {
            entry.target.classList.add('header-fixed');
        } else {
            entry.target.classList.remove('header-fixed');
        }
    }
)
headerObserver.observe(header);

const sectionAnim = document.querySelectorAll('.section-anim');

const sectionAnimObserve = new IntersectionObserver((entries, observe) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        if (entry.target.classList.contains('section-anim-left')) {
            entry.target.classList.add('section-anim-left-active');
            observe.unobserve(entry.target);
        }
        if (entry.target.classList.contains('section-anim-right')) {
            entry.target.classList.add('section-anim-right-active');
            observe.unobserve(entry.target);
        }
        if (entry.target.classList.contains('section-anim-bot')) {
            entry.target.classList.add('section-anim-bot-active');
            console.log(entry.target);
            observe.unobserve(entry.target);
        }
    },
    {
        root: null,
        treshold: 0.1,
        rootMargin: '-10px'
    }
    );
sectionAnim.forEach(section=>{
    sectionAnimObserve.observe(section);
});