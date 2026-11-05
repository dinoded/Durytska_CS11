const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", () => {
    const a = Number(document.getElementById("a3").value);
    const h = Number(document.getElementById("h3").value);
    const r = document.getElementById("r3");

    if (a <= 0 || h <= 0) {
        r.textContent = "Введіть додатні числа";
        return;
    }

    const s = a * h / 2;

    r.textContent = `S = ${Math.round(s * 100) / 100}`;
});
