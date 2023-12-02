import app from './app.js'

app.get("/", (req, res) => {
    res.json({message: "hola mundo"})
})

const port = 8080
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });