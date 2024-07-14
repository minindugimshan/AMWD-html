var modal = document.getElementById('addStudentModal');

var btn = document.querySelector('.add-student-button');

var span = document.getElementsByClassName('close')[0];

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


function addStudent() {
    var studentName = document.getElementById('studentName').value;
    var gender = document.getElementById('gender').value;
    var dob = document.getElementById('dob').value;
    var address = document.getElementById('address').value;
    var contact = document.getElementById('contact').value;


    var newStudent = `
        <div class="student-box">
            <div class="student-image">
                <img src="img/student.png" alt="Student Image">
            </div>
            <div class="student-details">
                <p class="student-name">${studentName}</p>
                <p>Gender - ${gender}</p>
                <p>DOB - ${dob}</p>
                <p>Address - ${address}</p>
                <p>Contact - ${contact}</p>
            </div>
            <button class="delete-button" onclick="deleteStudentBox(this)">Delete</button>
        </div>
    `;

    document.querySelector('.student-container').insertAdjacentHTML('beforeend', newStudent);


    closeModal();

    document.getElementById('addStudentForm').reset();
}
function deleteStudent(button) {
    button.closest('.student-box').remove();
}

function deleteStudent(button) {
    button.closest('.student-box').remove();
}
