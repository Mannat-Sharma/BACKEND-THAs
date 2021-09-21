const fs = require('fs');
const program = require('commander');

// CREATE
program.command('create-dir <dirname>').action((dirname) => {
    fs.mkdir(dirname, (err) => {
        console.log(err);
    })
})


// READ
program.command('rf <path>').action((path) => {
    fs.readFile(path, 'utf-8', (err, content) => {
        console.log(content);
    })
})

// UPDATE
program.command('updateFile <path> <addcontent>').action((path, addcontent) => {
    fs.appendFile(path, addcontent, (err) => {
        console.log(err);
    }) 
})

// DELETE
program.command('delete <path>').action((path) => {
    fs.unlink(path, err=>{
        console.log(err);
    })
})
program.parse(process.argv)