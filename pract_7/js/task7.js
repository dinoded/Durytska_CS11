const btn7 = document.getElementById("btn7");

function cnt(s, ch) {
    let n = 0;
    for (const x of s) {
        if (x === ch) {
            n++;
        }
    }
    return n;
}

btn7.addEventListener("click", () => {
    const w = document.getElementById("w7").value;
    const v = document.getElementById("v7").value;
    const r = document.getElementById("r7");

    if (w === "" || v === "") {
        r.textContent = "Введіть два слова";
        return;
    }

    let ok = w.length === v.length;

    for (const ch of w) {
        if (cnt(w, ch) !== cnt(v, ch)) {
            ok = false;
        }
    }

    if (ok) {
        r.textContent = "анаграма";
    } else {
        r.textContent = "не анаграма";
    }
});
