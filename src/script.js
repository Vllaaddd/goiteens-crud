const BASE_URL = 'http://localhost:3000';
const btn = document.querySelector('.btn');
const studentsList = document.querySelector('.studentsList')
const addNewStudentsForm = document.querySelector('.addNewStudentsForm')
const deleteStudentForm = document.querySelector('.deleteStudentForm')

window.addEventListener('load', getAllStudents())

function getAllStudents(){
    return fetch(`${BASE_URL}/students`)
        .then(res => res.json())
        .then(students => {
            for (let i = 0;i < students.length; i++) {
                const newStudentItem = document.createElement('li');

                const newStudentName = document.createElement('p')
                newStudentName.textContent = "ім'я: " + students[i].name;
                newStudentName.classList.add('studentName')

                const newStudentEmail = document.createElement('p')
                newStudentEmail.textContent = 'Email: ' + students[i].email;
                newStudentEmail.classList.add('studentEmail')

                const newStudentPhone = document.createElement('p')
                newStudentPhone.textContent = 'телефон: ' + students[i].phone;
                newStudentPhone.classList.add('studentPhone')

                const newStudentAge = document.createElement('p')
                newStudentAge.textContent = 'вік: ' + students[i].age;
                newStudentAge.classList.add('studentAge')

                const newStudentId = document.createElement('p')
                newStudentId.textContent = 'id: ' + students[i].id;
                newStudentId.classList.add('studentId')

                newStudentItem.append(newStudentName, newStudentEmail, newStudentPhone, newStudentAge, newStudentId)
                studentsList.append(newStudentItem)
            }
        })
}

addNewStudentsForm.addEventListener('submit', e => {

    const newStudent = {
        name: document.querySelector('.newStudentName').value,
        age: document.querySelector('.newStudentAge').value,
        email: document.querySelector('.newStudentEmail').value,
        phone: document.querySelector('.newStudentPhone').value
    }

    addStudent(newStudent);
})



deleteStudentForm.addEventListener('submit', e => {
    deleteStudentById(document.querySelector('.deleteStudentInput').value)
})


function getStudentsById(studentId){
    return fetch(`${BASE_URL}/students/${studentId}`)
}

function addStudent(newStudent){

    const options = {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newStudent)
    }

    return fetch(`${BASE_URL}/students`, options)
}


const newInformation = {
    name: "Bob Johnson 4",
}


function updateAllStudentInfo(studentId, newInformation){

    const options = {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newInformation)
    }

    return fetch(`${BASE_URL}/students/${studentId}`, options)

}


function updateSomeStudentInfo(studentId, newInformation){

    const options = {
        method: "PATCH",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newInformation)
    }

    return fetch(`${BASE_URL}/students/${studentId}`, options)

}


function deleteStudentById(studentId){

    const options = {
        method: "DELETE"
    }

    return fetch(`${BASE_URL}/students/${studentId}`, options)

}



function getStudentsByAge(studentAge){
    return fetch(`${BASE_URL}/students?age=${studentAge}`)
}


function getStudentsByName(studentName){
    return fetch(`${BASE_URL}/students?name=${studentName}`)
}


function getStudentsByEmail(studentEmail){
    return fetch(`${BASE_URL}/students?email=${studentEmail}`)
}


function getStudentsByPhone(studentPhone){
    return fetch(`${BASE_URL}/students?phone=${studentPhone}`)
}




// btn.addEventListener('click', e => {
//     getAllStudents()
// })