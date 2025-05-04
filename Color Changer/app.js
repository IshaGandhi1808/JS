const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body");

btns.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener("click", (e) => {
        // console.log(e);
        console.log(e.target.id);

        if (e.target.id === "white") {
            body.style.backgroundColor = "white";
        }

        if (e.target.id === "black") {
            body.style.backgroundColor = "black";
        } 

        if (e.target.id === "gray") {
            body.style.backgroundColor = "gray";
        }
        
        if (e.target.id === "darkblue") {
            body.style.backgroundColor = "darkblue";
        }

        if (e.target.id === "pink") {
            body.style.backgroundColor = "pink";
        }

        if (e.target.id === "purple") {
            body.style.backgroundColor = "purple";
        }

        if (e.target.id === "skyblue") {
            body.style.backgroundColor = "skyblue";
        }

        if (e.target.id === "plum") {
            body.style.backgroundColor = "plum";
        }

        if (e.target.id === "d0f4de") {
            body.style.backgroundColor = "#d0f4de";
        }

        if (e.target.id === "c0fdff") {
            body.style.backgroundColor = "#c0fdff";
        }

        if (e.target.id === "dvoilete") {
            body.style.backgroundColor = "#7678ed";
        }

        if (e.target.id === "fdc500") {
            body.style.backgroundColor = "#fdc500";
        }

        if (e.target.id === "dgreen") {
            body.style.backgroundColor = "#00509d";
        }

        if (e.target.id === "f19c79") {
            body.style.backgroundColor = "#f19c79";
        }

        if (e.target.id === "fdffb6") {
            body.style.backgroundColor = "#fdffb6";
        }

        if (e.target.id === "a0c4ff") {
            body.style.backgroundColor = "#a0c4ff";
        }

        if (e.target.id === "ffadad") {
            body.style.backgroundColor = "#ffadad";
        }
    });
});