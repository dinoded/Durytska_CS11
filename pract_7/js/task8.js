const btn8 = document.getElementById("btn8");

btn8.addEventListener("click", () => {
    const n = Number(document.getElementById("n8").value);
    const r = document.getElementById("r8");

    if (n < 1 || Math.floor(n) !== n) {
        r.textContent = "Введіть ціле число від 1";
        return;
    }

    if (n > 78) {
        r.textContent = "Максимальний номер 78";
        return;
    }

    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }

    r.textContent = `F(${n}) = ${b}`;
});
