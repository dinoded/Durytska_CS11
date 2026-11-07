const btn = document.getElementById("go");
const src = document.getElementById("source-text");
const res = document.getElementById("result-text");

btn.addEventListener("click", () => {
    let html = "";
    let i = 0;

    for (const ch of src.value) {
        const d = i * 0.03;
        const s = Math.floor(Math.random() * 21) - 10;

        if (ch >= "a" && ch <= "z") {
            html = html + `<img src="./images/small_${ch}.png" style="--anim-delay: ${d}s; --shift: ${s}px">`;
        } else if (ch >= "A" && ch <= "Z") {
            html = html + `<img src="./images/${ch}.png" style="--anim-delay: ${d}s; --shift: ${s}px">`;
        } else if (ch === "\n") {
            html = html + "<br>";
        } else {
            html = html + `<span style="--anim-delay: ${d}s">${ch}</span>`;
        }

        i++;
    }

    res.innerHTML = html;
});
