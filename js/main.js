let windowMain = document.querySelector('.windowMain')
let score = document.querySelector('.score__inner')
let listMain = document.querySelector(".list");

let arr = [];

for (let i = 0; i < 4; i++) {
    pokemons.forEach((item) => {
        arr.push(item);
    });
}

let arr_length = 60;

for (let i = 0; i < 100; i++) {
    const idx1 = Math.floor(Math.random() * arr_length);
    const idx2 = Math.floor(Math.random() * arr_length);

    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

let i = 0;
let x = 1;
let y = 1;
let row = 1;
arr.forEach((item, idx) => {
    let li = document.createElement("li");
    li.className = "item__box";
    li.classList.add(item.id);
    li.id = row;
    li.classList.add("card" + idx);
    li.classList.add(x + "-" + y);
    li.setAttribute("data", idx);
    li.innerHTML = `
      <button id="btn" class=" game__btn">
        <img class="game__img" src="${item.img}" alt="img">
      </button>
    `;
    li.addEventListener("click", (e) => {
        e.currentTarget.classList.add("outline");
        const juft = document.querySelectorAll(".outline");
        if (juft.length == 2) {
            const boxFig1 = juft[0].classList[1];
            const boxFig2 = juft[1].classList[1];
            const info = +juft[0].getAttribute("data");
            const info2 = +juft[1].getAttribute("data");

            if (boxFig1 == boxFig2) {

                lineOne(juft, info, info2);
                if (Math.abs(info - info2) % 10 == 0) {
                    birUstunda(juft, info, info2);
                }
                lineOther(juft, info, info2);
            } else {
                console.log("type does not match");
                juft.forEach((figure) => figure.classList.remove("outline"));
            }
        }
    });
    if ((idx - 9) % 10 == 0) {
        row = 0;
        x = 0;
        y++;
    }
    x++;
    i++;
    row++;
    listMain.appendChild(li);
});
// ------------------------------------------------
function lineOne(juft, loc_1, loc_2) {
    if (loc_1 < loc_2) {
        for (let i = 1; i <= Math.abs(loc_1 - loc_2); i++) {
            let place = loc_1 + i;
            if (place == loc_2) {
                juft.forEach((el) => el.classList.add("d_none"));
                juft.forEach((el) => el.classList.remove("outline"));

                break;
            } else if (
                (loc_1 == 0 || (loc_1 < 10 && loc_1 >= 0)) && (loc_2 == 0 || (loc_2 < 10 && loc_2 >= 0))
            ) {
                juft.forEach((el) => el.classList.add("d_none"));
                juft.forEach((el) => el.classList.remove("outline"));
                break;
            } else if (
                (loc_1 == 50 || (loc_1 <= 59 && loc_1 >= 50)) && (loc_2 == 50 || (loc_2 <= 59 && loc_2 >= 50))
            ) {
                juft.forEach((el) => el.classList.add("d_none"));
                juft.forEach((el) => el.classList.remove("outline"));
                break;
            } else {
                const place_el = document.querySelector(`[data="${place}"]`);
                if (!place_el.classList.value.includes("d_none")) {
                    juft.forEach((el) => el.classList.remove("outline"));
                    break;
                } else {
                    continue;
                }
            }
        }
    }
}



function lineOther(juft) {
    let click1 = +juft[0].getAttribute(`data`);
    let click2 = +juft[1].getAttribute(`data`);
    let click_id = +juft.id;
    let rowID = juft[0].id - juft[1].id;
    bottomright(juft, click1, click2, rowID);
    bottomletf(juft, click1, click2, rowID, click_id);
}

function bottomright(click1, click2, rowID) {
    if (rowID > 0) {
        let chakColumn = 0;
        for (let i = 1; i <= rowID; i++) {
            let qadam = document.querySelector(`.card${click1 - i}`);
            chakColumn = rowID;
            if (!qadam.classList.contains("d_none")) {
                break;
            } else {
                if (rowID == i) {}
            }
        }
        console.log(chakColumn);
        for (let i = 0; i < chakColumn; i += 10) {
            let qadamColumn = document.querySelector(`.card${chakColumn + i}`);
            console.log(qadamColumn);
            console.log(click2);
            if (qadamColumn.classList.contains("d_none")) {}
        }
    }
}

function bottomletf(juft, click1, click2, rowID, click_id) {
    if (rowID < 0) {
        for (let i = 1; i <= Math.abs(rowID); i++) {
            let qadam = document.querySelector(`.card${click1 + i}`);
            chakColumn = rowID;
            if (!qadam.classList.contains("d_none")) {
                break;
            } else {
                if (Math.abs(rowID) === i) {
                    console.log("bosh");
                    for (let i = 0; i < Math.abs(rowID); i += 10) {
                        let qadamColumn = document.querySelector(
                            `.card${click_id + Math.abs(rowID) + i}`
                        );
                        console.log(qadamColumn, Math.abs(rowID), i);
                        console.log(click2);
                        if (qadamColumn.classList.contains("d_none") !== null && qadamColumn.classList.contains("d_none")) {
                            juft.forEach((el) => el.classList.add("d_none"));
                            juft.forEach((el) => el.classList.remove("outline"));
                        } else {
                            break;
                        }
                    }
                }
            }
        }
    }
}




function birUstunda(juft, fig1, fig2) {
    if (fig1 < fig2) {
        let place;
        for (let i = 1; i <= Math.abs(fig1 - fig2) / 10; i++) {
            place = fig1 + i * 10;
            if (place == fig2) {
                juft.forEach((el) => el.classList.add("d_none"));
                juft.forEach((el) => el.classList.remove("outline"));
                break;
            } else if (
                (fig1 == 0 || fig1 % 10 == 0) &&
                (fig2 == 0 || fig2 % 10 == 0)
            ) {
                juft.forEach((el) => el.classList.add("d_none"));
                juft.forEach((el) => el.classList.remove("outline"));
                break;
            } else if (leftside(fig1, fig2)) {
                juft.forEach((el) => el.classList.add("d_none"));
                juft.forEach((el) => el.classList.remove("outline"));
                break;
            } else {
                const place_el = document.querySelector(`[data="${place}"]`);
                if (!place_el.classList.value.includes("d_none")) {
                    juft.forEach((el) => el.classList.remove("outline"));
                    break;
                } else {
                    continue;
                }
            }
        }
    } else {}
}


let res = document.querySelector(".restart")

res.addEventListener('click', () => {
    window.setTimeout(() => {
        window.location.reload(true);
    }, 200);
    document.getElementById("windowMain").style.display = "none";
    listMain.style.display = ('flex')
})