const express = require('express')
const {PrismaClient}  = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/', (req, res)=> {
    res.send('hola a todos')
})
//crear un usuario
app.post('/user', async(req, res)=>{
    const {name, email, password} = req.body
    const result = await prisma.user.create({
        data: {
            name, email, password
        }
    })
    res.json(result)
})
//mostrar todos los usuarios
app.get(`/users`, async(req, res)=>{
    const users = await prisma.user.findMany()
    res.json(users)
 })
 //actualizar un usuario
app.put('/user/:id', async(req, res)=>{
    const {id} = req.params
    const {name, email, password} = req.body
    const user = await prisma.user.update({
          where: {id: Number(id)},
        data: {name, email, password}
    })
    res.json(user)
  
})
//eliminar usuario

app.delete('/user/:id', async(req, res)=>{
    const {id} = req.params
    const {name, email, password} = req.body
    const user = await prisma.user.delete({
        where: {id: Number(id)}
    })
    res.json('Eliminado')
})

////////////////////////////////////////////////////////////////
//crear un registro

app.post('/post', async(req, res)=>{
    const {title, content} = req.body
    const result = await prisma.post.create({
        data: {
            title, content
        }
    })
    res.json(result)
})
//mostrar todos los resgistros
app.get(`/posts`, async(req, res)=>{
   const posts = await prisma.post.findMany()
   res.json(posts)
})

//actualizar un registro
app.put('/post/:id', async(req, res)=>{
    const {id} = req.params
    const {title, content} = req.body
    const post = await prisma.post.update({
          where: {id: Number(id)},
        data: {title, content}
    })
    res.json(post)
  
})

//eliminar registro

app.delete('/post/:id', async(req, res)=>{
    const {id} = req.params
    const {title, content} = req.body
    const post = await prisma.post.delete({
        where: {id: Number(id)}
    })
    res.json('Eliminado')
})

app.listen(3000, ()=> 
    console.log('servidor listo en : http//localhost:3000')
)
