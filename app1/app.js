const val=require('validator')
const chalk=require('chalk')
const yargs=require('yargs')
const add=require('./utils.js')
yargs.version('1.1.0')
yargs.command({
    command:'add',
    describe:'add note',
    builder:{
        title:{
            describe:'Note desc',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note desc',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        add(argv.title,argv.body)
    }
})
yargs.parse()