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
        const btnDeleteCard = document.createElement("button")

        article.innerHTML = `<h3>Nombre: ${student.name}</h3> <p>Email: ${student.email}</p>  <p>Edad: ${student.age}</p> 
        <p>Curso ${student.course}</p>`


        cards.appendChild(article)

//---------------------------------------------Pintamos btn en cards------------------------------------------------------------------
        article.appendChild(btnDeleteCard)
        btnDeleteCard.textContent = "Borrar Estudiante"

//---------------------------------------------ELIMINAR UN ESTUDIANTE(Por su posicion y id)------------------------------------------------------------------
        btnDeleteCard.addEventListener( "click", e => {
            const foundIndex = students.findIndex( item => item.id === student.id  )
            students.splice(foundIndex, 1)
            applyFilters()
        } )
        
    });
    
    
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