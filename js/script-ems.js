// global query function
const $ = (q) => document.getElementById(q) || document.getElementsByTagName(q)

// CREATE AN ARRAY OF EMPLOYEES
const defaultArray = () => {
    // enum depts
    const departments = ['Administrative', 'Engineering', 'Executive', 'Marketing', 'Quality Assurance', 'Sales']
    return [
        { id: 11111111, name: 'John Doe', ext: '1111', email: 'jdoe@app.com', dept: departments[0] },
        { id: 11111112, name: 'Jane Chatwin', ext: '1112', email: 'jchatwin@app.com', dept: departments[3] },
        { id: 11111113, name: 'Alice Cooper', ext: '1113', email: 'acooper@app.com', dept: departments[4] },
        { id: 11111114, name: 'Trevor Weston', ext: '1114', email: 'tweston@app.com', dept: departments[5] },
        { id: 11111115, name: 'Brandon Lennard', ext: '1115', email: 'blennard@app.com', dept: departments[1] }
    ]
}

// GET DOM ELEMENTS
const form = $('addForm'), empTable = $('empTable')

let employees = []

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
document.addEventListener('DOMContentLoaded', (e) => {

    // IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
    const init = JSON.parse(localStorage.getItem('employees')) || defaultArray()
    // console.log(init)
    employees.push(...init)

    // BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
    buildGrid()
})

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push({
        id: $('id').value,
        name: $('name').value,
        ext: $('extension').value,
        email: $('email').value,
        dept: $('department').value
    })

    // BUILD THE GRID
    buildGrid()

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {

    // CONFIRM THE DELETE
    if (e.target.tagName === 'BUTTON' && confirm('Delete employee?')) {

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        const empId = e.target.parentNode.parentNode.id

        // REMOVE EMPLOYEE FROM ARRAY
        employees = employees.filter(e => e.id != empId)

        // BUILD THE GRID
        buildGrid()
    }

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {

    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    for (t of $('tbody')) t.remove() // rid entrie page of any tbody tags

    // REBUILD THE TBODY FROM SCRATCH
    const tbody = document.createElement('tbody')

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (e of employees) {

        // REBUILDING THE ROW STRUCTURE
        tbody.innerHTML += `<tr id=${e.id}><td>${e.id}</td><td>${e.name}</td><td>${e.ext}</td><td>${e.email}</td><td>${e.dept}</td><td><button class="btn btn-danger btn-sm float-end delete">-</button></td></tr>`
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.append(tbody)

    // UPDATE EMPLOYEE COUNT
    $('empCount').innerHTML = employees.length

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))
};