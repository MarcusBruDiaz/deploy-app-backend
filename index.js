const express = require('express');
const app = express();
let cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.static('build'))


let notes=[
    {
        id: 1,
        content:"Browser can execute only JavaScript",
        date:"2020-01-10T18:39:34.091z  ",
        important: false
    }
]


function generateID(min,max){
    min = Math.ceil(min);
    max= Math.floor(max)

    return Math.floor(Math.random()*(max-min)+min)
}


app.get('/',(request,response)=>{
    response.send("<h1>Ejercicios</h1>")
})

app.get('/api/notes', (request,response)=>{
    response.json(notes)
})

//cd ../example-submission-repository-MarcusBruDev/part2/notes/


const PORT = process.env.PORT || 3001
const HOST= 'localhost'; 

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})


