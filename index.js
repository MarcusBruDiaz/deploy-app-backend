const express = require('express');
const app = express();
let cors = require('cors');
app.use(cors());
app.use(express.json());



let notes=[
    {
        id: 1,
        content:"Browser can execute only JavaScript",
        number: "040-123456",
        important: true
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




const PORT = process.env.PORT || 3001
const HOST= 'localhost'; 

app.listen(PORT,HOST,()=>{
    console.log(`Server running on port http://${HOST}:${PORT}`)
})


