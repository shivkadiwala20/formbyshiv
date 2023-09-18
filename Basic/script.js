const form = document.getElementById('employeeForm');
        const employeeData = document.getElementById('employeeData');

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
const gender = document.getElementById('gender').value;
const dob = document.getElementById('dob').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const cricketCheckbox = document.getElementById('cricket');
const chessCheckbox = document.getElementById('chess');
const musicCheckbox = document.getElementById('music');


const newRow = employeeData.insertRow();
const cell1 = newRow.insertCell(0);
const cell2 = newRow.insertCell(1);
const cell3 = newRow.insertCell(2);
const cell4 = newRow.insertCell(3);
const cell5 = newRow.insertCell(4);
const cell6 = newRow.insertCell(5);


cell1.innerHTML = name;
cell2.innerHTML = gender;
cell3.innerHTML = dob;
cell4.innerHTML = email;
cell5.innerHTML = phone;
cell6.innerHTML = "";
if (cricketCheckbox.checked) {
    cell6.innerHTML += "Cricket ";
}
if (chessCheckbox.checked) {
    cell6.innerHTML += "Chess ";
}
if (musicCheckbox.checked) {
    cell6.innerHTML += "Music"; 
}

form.reset();

        });