const btn6 = document.getElementById("btn6");

btn6.addEventListener("click", () => {
    const v = document.getElementById("n6").value;
    const r = document.getElementById("r6");

    if (v === "") {
        r.textContent = "Введіть число";
        return;
    }

    let ok = true;

    for (let i = 0; i < v.length / 2; i++) {
        if (v[i] !== v[v.length - 1 - i]) {
            ok = false;
        }
    }

    if (ok) {
        r.textContent = "Паліндром";
    } else {
        r.textContent = "Не паліндром";
    }
});
