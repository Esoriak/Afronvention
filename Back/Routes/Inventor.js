const express = require('express')
const connection = require('../conf')
const VerifyToken = require('../auth/VerifyToken');

const router = express.Router()


router.get("/inventors", (req, res) => {
  connection.query("SELECT * FROM `Inventors`", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des inventeurs")
    } else {
      res.json(results)
    }
  })
})

router.post("/addinventors", (req, res) => {
  const { firstname, lastname, birthday_date, death_date, origine, pays, history} = req.body 
  const formData = [
    {
      firstname: firstname,
      lastname: lastname,
      borthday_date: birthday_date,
      death_date: death_date,
      origine: origine,
      pays: pays,
      history: history,
      // rajouter la foreign key de l'invention
    }
  ]
    connection.query("INSERT INTO `Inventors` SET ?",formData, (err, results) => {
      if (err) {
        console.log("ta moman l'inventrice", err)
        res.status(500).send("Erreur de lors de l'enregistrement d'un inventeur.")
      } else {
        console.log(results.insertId)
        res.status(200).json({ results: "inventeur ajouté avec succés."})
      }
    })
})



router.put("/updateinventors/:id"), (req, res) => {
  const idadmin = req.params.id
  const formData = req.body
  connection.query('UPDATE Inventors SET ? WHERE idInventors = ?', [formData, idadmin], err => {
    if (err)
      res.status(500).send('Erreur lors de la modification de l\'inventeur')
    else
      res.sendStatus(200)
  })
}

router.delete('/deleteinventors/:id', VerifyToken, (req, res) => {
  const idAdmin = req.params.id
  connection.query('DELETE FROM Inventors WHERE idInventors = ?', idAdmin, err => {
    if (err)
      res.status(500).send('Erreur lors de la suppression de l\'inventeur')
    else
      res.sendStatus(200)
  })
})

module.exports = router