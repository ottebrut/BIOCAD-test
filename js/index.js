const ths = Array.from(document.querySelectorAll("th")).map(th => th.innerText);
document.querySelectorAll("tr").forEach(tr =>
    Array.from(tr.children).forEach((td, index) =>
        td.setAttribute("label", ths[index]))
)

const radioButtons = document.querySelectorAll(".radio-types__input");
const reportTitle = document.querySelector(".report__title")
const reportTable = document.querySelector(".report-table");
const sorryMessage = document.querySelector(".report__sorry-message");

generate();

function generate() {
    let checkedRadio;
    radioButtons.forEach(radio => {
        if (radio.checked) {
            checkedRadio = radio.id.substr(6); // radio-...
        }
    });
    reportTitle.innerText = checkedRadio[0].toUpperCase() + checkedRadio.slice(1) + " report";
    if (checkedRadio === "calibration") {
        reportTable.style.display = "table";
        sorryMessage.style.display = "none";
    } else {
        reportTable.style.display = "none";
        sorryMessage.style.display = "block";
    }
}