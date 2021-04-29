const book={
    title:'Ego',
    author:'My'
}
const bookJSON=JSON.stringify(book)
const fs=require('fs')
fs.writeFileSync('JSONFile.json',bookJSON)
const dataBuf=fs.readFileSync('JSONFile.json')
console.log(JSON.parse(dataBuf.toString()).author)
const jsondata=JSON.parse(dataBuf.toString())
jsondata.title="New Title"
console.log(jsondata)