var selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["task"] = document.getElementById("task").value;
    formData["duration"] = document.getElementById("duration").value;
    formData["date"] = document.getElementById("date").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.task;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.duration;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.date;
    cell5 = newRow.insertCell(4);
cell5.innerHTML = `<a style="${editButtonStyle}" onClick="onEdit(this)">Edit</a>
                   <a style="${deleteButtonStyle}" onClick="onDelete(this)">Delete</a>`;
}
// Add these styles to your script.js file
const editButtonStyle = 'background-color: #007BFF; color: #fff; padding: 5px 10px; border: none; border-radius: 5px; cursor: pointer; margin-right: 5px;';
const deleteButtonStyle = 'background-color: #FF0000; color: #fff; padding: 5px 10px; border: none; border-radius: 5px; cursor: pointer;';

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("task").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("date").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("task").value = selectedRow.cells[1].innerHTML;
    document.getElementById("duration").value = selectedRow.cells[2].innerHTML;
    document.getElementById("date").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.task;
    selectedRow.cells[2].innerHTML = formData.duration;
    selectedRow.cells[3].innerHTML = formData.date;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
