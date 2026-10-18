import { students } from "./data.js"

//----------------------------------CREAMOS LAS CARDS---------------------------------------------------
const cards = document.getElementById("cards")
function renderStudents(list) {
    cards.innerHTML = "";

    if (list.length === 0) {
        cards.innerHTML = `<p>No se encontraron estudiantes</p>`
        return
    }


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

//----------------------------------BUSCAMOS POR EMAIL---------------------------------------------------
const inputSearch = document.getElementById("search-email")
const btnClearSearch = document.getElementById("clear-search")

inputSearch.addEventListener("input", e => {
    const inputValue = inputSearch.value.trim().toLowerCase()

    const filterStudent = students.filter(student => student.email.toLowerCase().includes(inputValue))

    renderStudents(filterStudent);
})

btnClearSearch.addEventListener("click", e => {
    inputSearch.value = ""
    renderStudents(students)
})