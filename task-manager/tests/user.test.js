const request = require('supertest')
const app = require('../src/app')
const User=require('../src/models/user')
const jwt =require('jsonwebtoken')
const mongoose =require('mongoose')
const useroneid= new mongoose.Types.ObjectId
const userone= {
    _id:useroneid,
    name:'akshat',
    email:'a@s.com',
    password:'hcbqfrfykgfygtf',
    tokens:[{
        token: jwt.sign({_id:useroneid},process.env.JWT_TOKEN)
    }]
}

beforeEach(async ()=>{
    await User.deleteMany()
    await new User(userone).save()
})

test('signup',async ()=>{
    const response = await request(app).post('/users').send({
        name:'Akshat',
        email:'akshat@e.com',
        password:'hbcryvercyervcketyv'
    }).expect(201)

    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    expect(response.body).toMatchObject({
        user:{
            name:"Akshat"
        },
        token: user.tokens[0].token
    })
})

test('login',async ()=>{
    await request(app).post('/users/login').send({
        email:userone.email,
        password:userone.password
    }).expect(200)
})

test('get profile',async ()=>{
    await request(app)
        .get('/users/me')
        .set('Authorization',`Bearer ${userone.tokens[0].token}`)
        .send()
        .expect(200)
})

test('test delete',async ()=>{
    await request(app)
        .delete('/users/me')
        .set('Authorization',`Bearer ${userone.tokens[0].token}`)
        .send()
        .expect(200)
})

test('test no delete if not authorized',async ()=>{
    await request(app)
        .delete('/users/me')
        .set('Authorizaion',`Bearer ${userone.tokens[0].token}`)
        .send()
        .expect(401)
})

test('upload', async ()=>{
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization',`Bearer ${userone.tokens[0].token}`)
        .attach('avatar','tests/fixtures/me2.jpeg')
        .expect(200)
})