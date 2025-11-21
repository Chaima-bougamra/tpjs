const form = document.getElementById("personForm");
const tableBody = document.getElementById("tableBody");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${nom}</td>
        <td>${prenom}</td>
        <td><button class="btn-delete">Supprimer</button></td>
    `;

    tableBody.appendChild(row);

    form.reset();
});

tableBody.addEventListener("click", function(e) {
    if (e.target.classList.contains("btn-delete")) {
        e.target.parentElement.parentElement.remove();
    }
});
