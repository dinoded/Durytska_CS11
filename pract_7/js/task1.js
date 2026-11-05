const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
    const a = Number(document.getElementById("a1").value);
    const b = Number(document.getElementById("b1").value);
    const c = Number(document.getElementById("c1").value);
    const r = document.getElementById("r1");

    if (a <= 0 || b <= 0 || c <= 0) {
        r.textContent = "Введіть додатні числа";
        return;
    }

    const p = (a + b + c) / 2;
    const s = p * (p - a) * (p - b) * (p - c);

    if (s <= 0) {
        r.textContent = "Такого трикутника не існує";
        return;
    }

    r.textContent = `S = ${Math.round(Math.sqrt(s) * 100) / 100}`;
});
