let listMain = document.querySelector('.list')


// const pakemon = pokemons.sort((a, b) => 0.5 - Math.random());

// for (let j = 0; j < 4; j++) {
//     for (let i = 0; i < pakemon.length; i++) {
//         let li = document.createElement("li")
//         li.className = "item__box";
//         li.innerHTML = `
//         <button id="btn" class="game__btn">
//           <img class="game__img" src="${pokemons[i].img}" alt="img">
//         </button>
//       `;
//         listMain.appendChild(li);
//     }
// }




let arr = []
for (let i = 0; i < 4; i++) {
    pokemons.forEach((item) => {
        arr.push(item)
    })

}
let arr_length = 60
for (let i = 0; i < 100; i++) {
    const idx1 = Math.floor(Math.random() * arr_length);
    const idx2 = Math.floor(Math.random() * arr_length);

    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}




arr.forEach((item) => {
    let li = document.createElement("li");
    li.className = "item__box";
    li.innerHTML = `
      <button id="btn" class="game__btn">
        <img class="game__img" src="${item.img}" alt="img">
      </button>
    `;
    listMain.appendChild(li);
});