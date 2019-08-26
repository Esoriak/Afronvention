const express = require("express")
const connection = require("../config/conf")

const router = express.Router



router.get("/inventions" , (req, res) => {
  connection.query("SELECT * from `Inventions`", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération de l'invention")
    } else {
      res.json(results)
    }
  })
})

router.post("/addinventions", (req, res) => {
  const {date, name} = req.body
  const formData = [
    {
      date,
      name,
    }
  ]
  console.log(formData)
  connection.query("INSERT INTO `Inventions` SET ?", formData, (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send("Erreur lors de l'enregistrement de l'invention.")
    } else {
      console.log(results.insertId)
      res.status(200).json({ results: "Invention enregistrée avec succés."})
    }
  })
})

module.exports = router