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

        //---------------------------------------------Pintamos btn en cards------------------------------------------------------------------
        const btnDeleteCard = document.createElement("button")
        article.appendChild(btnDeleteCard)
        btnDeleteCard.textContent = "Borrar Estudiante"

        //---------------------------------------------ELIMINAMOS UN ESTUDIANTE(Por su posicion y id)------------------------------------------------------------------
        btnDeleteCard.addEventListener("click", e => {
            const foundIndex = students.findIndex(item => item.id === student.id)
            students.splice(foundIndex, 1)
            applyFilters()
        })

        //---------------------------------------------EDITAMOS UN ESTUDIANTE------------------------------------------------------------------
        const btnEdit = document.createElement("button")//creamos el boton
        article.appendChild(btnEdit)
        btnEdit.textContent = "Editar Estudiante"

        btnEdit.addEventListener("click", e => {

            article.innerHTML = `<section>
            <h2>Rellenar Formulario</h2>
            <form action="">
            <label>Tu Nombre</label>
            <input type="text" name="name">
            
            <label>Tu Edad</label>
            <input type="number" name="age">
            
            <label>Tu Email</label>
            <input type="email" name="email">
            
            <label>Tu Curso</label>
            <input type="text" name="course">
            <button type="submit">Editar</button>
            </form>
            </section>`

            const miniForm = article.querySelector("form")
            console.log(miniForm);

            miniForm.addEventListener("submit", e => {
                e.preventDefault();
                const { name, age, email, course } = miniForm.elements

                student.name = name.value
                student.age = Number(age.value)
                student.email = email.value
                student.course = course.value

                applyFilters()
            })
        })
    }
    );
}
//----------------------------------filtros combinados (edad + curso + email)---------------------------------------------------

const ageMin = document.getElementById("ageMin")
const courseSelect = document.getElementById("courseSelect")
const inputEmail = document.getElementById("search-email")

function applyFilters() {
    const age = Number(ageMin.value); //edad minima
    const course = courseSelect.value; //curso seleccionado
    const email = inputEmail.value.trim().toLowerCase() //Input Email


    const requirementStudent = students.filter(student => student.email.toLowerCase().includes(email) && student.age >= age && (course === "" || student.course === course))

    renderStudents(requirementStudent)
}



//----------------------------------  LISTENERS  ---------------------------------------------------

//----------------------------------BUSCAMOS POR EMAIL---------------------------------------------------

inputEmail.addEventListener("input", e => {
    applyFilters()
})


//----------------------------------BUSCAMOS POR EDAD---------------------------------------------------

ageMin.addEventListener("input", e => {
    applyFilters()
})

//----------------------------------BUSCAMOS POR CURSO---------------------------------------------------

courseSelect.addEventListener("change", e => {
    applyFilters()
})

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

//----------------------------------BTN Borrar busqueda---------------------------------------------------

const btnClearSearch = document.getElementById("clear-search")

btnClearSearch.addEventListener("click", e => {
    inputEmail.value = "";
    ageMin.value = ""
    courseSelect.value = ""
    renderStudents(students)
})



applyFilters()//pinta la pagina 