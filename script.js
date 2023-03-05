const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll(".jobtitle")

window.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    /* console.log(x); */
    let y = e.pageY;

    cursor.forEach(el => {
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;

        links.forEach(link => {
            link.addEventListener("mouseenter", () => {
                el.classList.add("hover");
            })
            link.addEventListener("mouseleave", () => {
                el.classList.remove("hover");
            })
        })
        })
    })

    const observer = new IntersectionObserver((entries) =>  {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
    
            } else {
                entry.target.classList.remove('show');
            }
        });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));