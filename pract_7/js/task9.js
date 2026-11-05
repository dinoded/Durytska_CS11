const btn9 = document.getElementById("btn9");

btn9.addEventListener("click", () => {
    const x = Number(document.getElementById("n9").value);
    const r = document.getElementById("r9");

    if (x < 1 || Math.floor(x) !== x) {
        r.textContent = "Введіть ціле число від 1";
        return;
    }

    let a = 1;
    let b = 1;

    while (b < x) {
        const c = a + b;
        a = b;
        b = c;
    }

    if (b === x) {
        r.textContent = "Належить послідовності";
    } else {
        r.textContent = "Не належить послідовності";
    }
});
