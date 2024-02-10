require("dotenv").config();
const express = require("express")
const db = require("./db");

const app = express();

app.use(express.json())

// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try{
        const results = await db.query("select * from restaurants")
        console.log(results)
        res.status(200).json({
            status:"success",
            results: results.rows.length,
            data:{
                restaurants: results.rows,
            }
        })
    } catch(err){
        console.log(err)
    }
 });

 // get a restaurants
app.get("/api/v1/restaurants/:id", (req,res)=>{
    console.log(req.params)
    res.status(200).json({
        status: "success",
        data:{
            restaurant: "mcdonalds"
        }
    })
})
 //post
 app.post("/api/v1/restaurants", (req,res) => {
    console.log(req.body)
    res.status(201).json({
        status: "success",
        data:{
            restaurant: "mcdonalds"
        }
    })
 });

//update

app.put("/api/v1/restaurants/:id", (req,res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.status(200).json({
        status: "success",
        data:{
            restaurant: "mcdonalds"
        }
    })
})

//delete

app.delete("/api/v1/restaurants/:id", (req, res)=>{
    res.status(204).json({
        status: "success"
    })
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server is up in port ${port}`)
});