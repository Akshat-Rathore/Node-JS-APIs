
const fs = require('fs')
const chalk=require('chalk')
const getNotes =  ()=> 'Your notes...'

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter( (note) =>note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const saveNotes =  (notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
debugger
const loadNotes =  ()=> {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}
const listnotes=()=>{
    const notes=listnodes()

    const nf=notes.forEach((note)=>console.log(note.title))
}
module.exports = addNote