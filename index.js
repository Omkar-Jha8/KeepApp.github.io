const add = document.querySelector('.add')

const addnewnote = (text = "") => {
    const note = document.createElement('div')
    note.classList.add('note-div')
    const HTMLData = `
    <div class="note">
        <button class="edit">Save</button>
        <button class="delete">Delete</button>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class='${text ? 'hidden' : ""}'></textarea>
    </div>`
    note.insertAdjacentHTML('afterbegin', HTMLData)


    var editbtn = note.querySelector('.edit')
    var deletebtn = note.querySelector('.delete')
    var maindiv = note.querySelector('.main')
    var textarea = note.querySelector('textarea');

    editbtn.addEventListener('click', () => {
        maindiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })
    const updateLSD = () => {
        const textareadata = document.querySelectorAll('textarea')
        const notes = []
        textareadata.forEach((note) => {
            return notes.push(note.value)
        })
        localStorage.setItem('notes', JSON.stringify(notes))
    }

    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        textarea.innerHTML = value;
        maindiv.innerHTML = value;
        updateLSD()
    })


    deletebtn.addEventListener('click', () => {
        note.remove()
    })



    document.body.appendChild(note)
}

const notes = JSON.parse(localStorage.getItem("notes"))
if (notes) { notes.forEach((value) => addnewnote(value)) }
add.addEventListener('click', () => addnewnote())