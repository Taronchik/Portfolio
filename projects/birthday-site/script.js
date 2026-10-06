/* =====================================================
   КНОПКА "ОТКРЫТЬ"
===================================================== */

const openButton = document.getElementById("openButton");

openButton.addEventListener("click", () => {

    document
        .querySelector(".greeting")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =====================================================
   ЭВЕРЕСТ
===================================================== */

const summitButton =
    document.getElementById("summitButton");

const climber =
    document.getElementById("climber");

const leftConfetti =
    document.getElementById("leftConfetti");

const rightConfetti =
    document.getElementById("rightConfetti");

let atSummit = false;


summitButton.addEventListener("click", () => {

    if (!atSummit) {

        /* Лада поднимается */

        climber.classList.add("at-summit");

        summitButton.textContent =
            "Спуститься к простым смертным";

        atSummit = true;


        /* Конфетти с двух сторон */

        createSideConfetti(
            leftConfetti,
            "left"
        );

        createSideConfetti(
            rightConfetti,
            "right"
        );


        /* Дополнительный салют */

        setTimeout(() => {

            createConfetti();

        }, 1000);

    }

    else {

        /* Лада спускается */

        climber.classList.remove("at-summit");

        summitButton.textContent =
            "Подняться к вершине";

        atSummit = false;

    }

});


/* =====================================================
   БОКОВЫЕ КОНФЕТТИ
===================================================== */

function createSideConfetti(
    container,
    side
) {

    container.innerHTML = "";


    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");


        piece.classList.add(
            "side-piece",
            side
        );


        piece.style.left =
            Math.random() * 180 + "px";


        piece.style.top =
            Math.random() * 220 + "px";


        piece.style.width =
            Math.random() * 7 + 5 + "px";


        piece.style.height =
            Math.random() * 10 + 8 + "px";


        piece.style.animationDelay =
            Math.random() * 0.4 + "s";


        const colors = [

            "#d77f97",
            "#e5a3b5",
            "#c66d87",
            "#efc1cd",
            "#b95f78"

        ];


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        container.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 3000);

    }

}


/* =====================================================
   ОБЫЧНОЕ КОНФЕТТИ
===================================================== */

const confettiContainer =
    document.getElementById("confetti");


function createConfetti() {

    for (let i = 0; i < 250; i++) {

        const piece =
            document.createElement("div");


        piece.classList.add("confetti");


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.animationDuration =
            (Math.random() * 2 + 2) + "s";


        piece.style.animationDelay =
            Math.random() * 0.5 + "s";


        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        const colors = [

            "#d77f97",
            "#e5a3b5",
            "#c66d87",
            "#efc1cd",
            "#b95f78"

        ];


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        confettiContainer.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 4500);

    }

}