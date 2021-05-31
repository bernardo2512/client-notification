const express = require('express');

// Iniciando o app
const app = express();
app.use(express.json())


// Rotas
app.post('/api',(req,res) => {
    console.log(req.body);
    res.send();
})


app.listen(3000,()=>{
  console.log('servidor rodando...');
});