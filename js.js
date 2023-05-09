const width = screen.width;
const nColumnas = Math.floor(width / 100);
const height = screen.height;
const nRows = Math.floor(height / 100);
document.querySelector(".contenedor_span").style.gridTemplateColumns = `repeat(${nColumnas}, minmax(100px, 1fr))`;
document.querySelector(".contenedor_span").style.gridTemplateRows = `repeat(${nRows}, minmax(100px, 1fr)))`;
let index = 0;
while (index < (nColumnas * nRows)) {
    const span = document.createElement('SPAN');
    span.classList.add("span");
    document.querySelector(".contenedor_span").appendChild(span);

    index++;
}

window.addEventListener("resize", () => {
    document.querySelector(".contenedor_span").innerHTML = '';
    const width = screen.width;
    const nColumnas = Math.floor(width / 100);
    const height = screen.height;
    const nRows = Math.floor(height / 100);
    document.querySelector(".contenedor_span").style.gridTemplateColumns = `repeat(${nColumnas}, minmax(100px, 1fr))`;
    document.querySelector(".contenedor_span").style.gridTemplateRows = `repeat(${nRows}, minmax(100px, 1fr)))`;
    let index = 0;
    while (index < (nColumnas * nRows)) {
        const span = document.createElement('SPAN');
        span.classList.add("span");
        document.querySelector(".contenedor_span").appendChild(span);
    
        index++;
    }
    clickSpans(document.querySelectorAll(".span"));
    animeBack();
})
setInterval(() => {
    
    anime({
        targets: ".icono_fondo",
        opacity: .4,
        rotate: function() { return anime.random(0, 180) },
        scale: function() { return anime.random(0.7, 1); },
        left: function() { return Math.floor(Math.random() * screen.width); },
        top: function() { return Math.floor(Math.random() * screen.height); },
        delay: anime.stagger(100)
    });
}, 5000);

function animeBack() {
    anime({
        targets: ".span",
        direction: "alternate",
        loop: true,
        scale: .98,
        scale: [
            {
                value: .97,
                duration: 200,
            },
            {
                value: 1,
                delay: 250,
            }
        ],
    
        delay: anime.stagger(50)
    })
}

anime({
    targets: ".contenedor_span",
    loop: true,
    keyframes: [
        {backgroundPosition: function () { return anime.random(0, 100) }},
        {backgroundPosition: function () { return anime.random(0, 100) }},
        {backgroundPosition: function () { return anime.random(0, 100) }},
        {backgroundPosition: function () { return anime.random(0, 100) }},
      ],
    easing: 'linear',
    direction: "alternate",
    duration: 6000
})

const spans = document.querySelectorAll(".span");

function clickSpans(spans) {
    
    spans.forEach(span => {
        span.addEventListener("click", (e) => {
            const gridComputedStyle = window.getComputedStyle(document.querySelector(".contenedor_span"));
            
            const gridRowCount = gridComputedStyle.getPropertyValue("grid-template-rows").split(" ").length;
            
            const gridColumnCount = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;
            
            console.log(gridRowCount, gridColumnCount);
            function getChildElementIndex(node) {
                return Array.prototype.indexOf.call(node.parentNode.children, node);
              }
            const index = getChildElementIndex(e.target);
            anime({
                targets: ".span",
                scale: [{
                    value: 0.95,
                    duration: 50
                },
                {
                    value: 1
                }
                ],
                delay: anime.stagger(100, {grid: [gridColumnCount, gridRowCount], from: index})
            })
        })
    })

}

animeBack();
clickSpans(spans);



anime({
    targets: '.svg path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 500,
    endDelay: 2000,
    delay: function(el, i) { return i * 550 },
    direction: 'alternate',
    loop: true,
  });

anime({
    targets: '.svg2 path',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 1000,
    endDelay: 2000,
    delay: function(el, i) { return i * 250 },
  });