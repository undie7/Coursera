function compute() {
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;

    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const y = parseInt(years);

    const interest = (p * y * r) / 100;
    const amount = p + interest;
    const year = new Date().getFullYear() + y;

    const result = document.getElementById("result");

    if (p <= 0) {
        alert("Please enter a positive number.");
        document.getElementById("principal").focus();
    } else {
        result.innerHTML = `
        If you deposit $${p}<br />
        at an interest rate of ${r}%<br />
        You will receive an amount of $${amount}<br />
        in the year ${year}<br />
        `;
    }
}

function updateRate() {
    const rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        