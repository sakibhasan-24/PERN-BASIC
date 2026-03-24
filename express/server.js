// import express from "express"

// const app = express()
// const port =3000
// app.get("/", (req, res) => {
//     res.send("Hello Express")
// })

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
// })

import express from "express"

const app = express()
const port = 3000

app.use(express.json())

//  Temporary Data )
let foods = [
    { id: 1, name: "Fuchka", price: 50, spicyLevel: "High" },
    { id: 2, name: "Chotpoti", price: 60, spicyLevel: "Medium" },
    { id: 3, name: "Jhalmuri", price: 30, spicyLevel: "Low" }
]

//  GET all foods
app.get("/foods", (req, res) => {
    res.json(foods)
})

// GET single food
app.get("/foods/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const food = foods.find(f => f.id === id)

    if (!food) {
        return res.status(404).json({ message: "Food not found" })
    }

    res.json(food)
})

//  CREATE food
app.post("/foods", (req, res) => {
    const newFood = {
        id: foods.length + 1,
        name: req.body.name,
        price: req.body.price,
        spicyLevel: req.body.spicyLevel
    }

    foods.push(newFood)
    res.status(201).json(newFood)
})

//  UPDATE food
app.put("/foods/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const food = foods.find(f => f.id === id)

    if (!food) {
        return res.status(404).json({ message: "Food not found" })
    }

    food.name = req.body.name || food.name
    food.price = req.body.price || food.price
    food.spicyLevel = req.body.spicyLevel || food.spicyLevel

    res.json(food)
})

//  DELETE food
app.delete("/foods/:id", (req, res) => {
    const id = parseInt(req.params.id)
    foods = foods.filter(f => f.id !== id)

    res.json({ message: "Food deleted" })
})

//  Server start
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})