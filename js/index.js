const ths = Array.from(document.querySelectorAll("th")).map(th => th.innerText);
document.querySelectorAll("tr").forEach(tr =>
    Array.from(tr.children).forEach((td, index) =>
        td.setAttribute("label", ths[index]))
)