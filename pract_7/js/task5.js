const btn5 = document.getElementById("btn5");

btn5.addEventListener("click", () => {
    const a = Number(document.getElementById("a5").value);
    const b = Number(document.getElementById("b5").value);
    const c = Number(document.getElementById("c5").value);
    const rad = Number(document.getElementById("rad5").value);
    const r = document.getElementById("r5");

    if (a <= 0 || b <= 0 || c <= 0 || rad <= 0) {
        r.textContent = "Введіть додатні числа";
        return;
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
        r.textContent = "Такого трикутника не існує";
        return;
    }

    const s = a * b * c / (4 * rad);

    r.textContent = `S = ${Math.round(s * 100) / 100}`;
});
