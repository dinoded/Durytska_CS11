const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
    const a = Number(document.getElementById("a2").value);
    const b = Number(document.getElementById("b2").value);
    const g = Number(document.getElementById("g2").value);
    const r = document.getElementById("r2");

    if (a <= 0 || b <= 0) {
        r.textContent = "Введіть додатні числа";
        return;
    }

    if (g <= 0 || g >= 180) {
        r.textContent = "Кут має бути від 0 до 180";
        return;
    }

    const s = a * b * Math.sin(g * Math.PI / 180) / 2;

    r.textContent = `S = ${Math.round(s * 100) / 100}`;
});
