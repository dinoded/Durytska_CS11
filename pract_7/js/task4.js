const btn4 = document.getElementById("btn4");

btn4.addEventListener("click", () => {
    const a = Number(document.getElementById("a4").value);
    const h = Number(document.getElementById("h4").value);
    const r = document.getElementById("r4");

    if (a <= 0 || h <= 0) {
        r.textContent = "Введіть додатні числа";
        return;
    }

    const s = a * h / 2;

    r.textContent = `S = ${Math.round(s * 100) / 100}`;
});
