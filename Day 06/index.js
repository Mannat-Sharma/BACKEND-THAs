const fs = require('fs/promises');
const program = require('commander');

// CREATE
program.command('create-dir <dirname>').action(async (dirname) => {
    await fs.mkdir(dirname)
})

// READ
program.command('rf <path>').action(async (path) => {
    let content = await fs.readFile(path, 'utf-8');
    console.log(content);
})

// UPDATE
program.command('updateFile <path> <addcontent>').action(async (path, addcontent) => {
    await fs.appendFile(path, addcontent) 
})

// DELETE
program.command('delete <path>').action(async (path) => {
    await fs.unlink(path)
})

program.parse(process.argv)