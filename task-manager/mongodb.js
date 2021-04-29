const {MongoClient,ObjectID}=require('mongodb')
const Db = require('mongodb/lib/db')
// const MongoClient = require('mongodb/lib/mongo_client')
// const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true,useUnifiedTopology: true},(error,client)=>{
    if(error)
    {
        return console.log(error)
    }
    else{
        const db = client.db(databaseName)
        const updatepromise = db.collection('users').updateOne({
            age:20},
            {
            $inc:{
                age:1

            }
        })

        updatepromise.then((result)=>{
            console.log(result)
        }).catch((error)=>{
            console.log(error)
        })
        
    }
})