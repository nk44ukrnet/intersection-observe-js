# new IntersectionObserver (JS)
Animating visible (in viewport) blocks with js (new IntersectionObserver) example

basic usage:
1. select an elemnt(s)

`const sectionAnim = document.querySelectorAll('.section-anim');`
2. add Intersection observer

`const sectionAnimObserve = new IntersectionObserver((entries, observe) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        if (entry.target.classList.contains('section-anim-left')) {
            entry.target.classList.add('section-anim-left-active');
            observe.unobserve(entry.target);
        }
    },`
    
3. Set it to Element(s)

`sectionAnim.forEach(section=>{
    sectionAnimObserve.observe(section);
});`

more details at test.html test.css test.js files
