import { students } from "./data.js"

//----------------------------------CREAMOS LAS CARDS---------------------------------------------------
const cards = document.getElementById("cards")
function renderStudents(list) {
    cards.innerHTML = ""

    list.forEach(student => {
        const article = document.createElement("article")
        article.innerHTML = `<h3>Nombre: ${student.name}</h3> <p>Email: ${student.email}</p>  <p>Edad: ${student.age}</p> 
        <p>Curso ${student.course}</p>`

        cards.appendChild(article)
    });


}
renderStudents(students)

//----------------------------------AÑADIMOS NUEVOS ESTUDIANTES---------------------------------------------------

const form = document.getElementById("form")

form.addEventListener("submit", e => {
    e.preventDefault()

    const { name, age, email, course } = form.elements

    //Creamos el objeto
    const newStudent = {
        id: Date.now(),
        name: name.value,
        age: Number(age.value),
        email: email.value,
        course: course.value,
    }

    //Push al array
    students.push(newStudent);

    renderStudents(students);

    form.reset()

})

