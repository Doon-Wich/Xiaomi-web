const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".goup")[0].classList.add("fadeInTop");
        }
    })
})

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".goup")[1].classList.add("fadeInTop");
        }
    })
})

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".goup")[2].classList.add("fadeInTop");
        }
    })
})

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".goup")[3].classList.add("fadeInTop");
        }
    })
})

const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".goup")[4].classList.add("fadeInTop");
        }
    })
})

const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".goup")[5].classList.add("fadeInTop");
        }
    })
})

observer.observe(document.querySelector(".detail"));
observer1.observe(document.querySelector(".detail1"));
observer2.observe(document.querySelector(".chip"));
observer3.observe(document.querySelector(".sec5"));
observer4.observe(document.querySelector(".sec6"));
observer5.observe(document.querySelector(".sec7"));

const square = document.querySelector('.case2');

let div = document.getElementsByClassName('.charge');

div.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset; 
    const val = scrolled * 0.4;
    if(val > 100){
        square.style.display = block;
    }
});


