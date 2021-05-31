const express = require('express');
const cors = require('cors');

// Iniciando o app
const app = express();
app.use(express.json())
app.use(cors())


// Rotas
app.get("/",(req,res)=> res.send("ok"))

app.post('/api',(req,res) => {
    console.log(req.body);
    res.send();
})


app.listen(3000,()=>{
  console.log('servidor rodando...');
});