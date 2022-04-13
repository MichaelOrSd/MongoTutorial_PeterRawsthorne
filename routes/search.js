const express = require('express');
const router = express.Router();

// const { getEverything } = require('../services/search.dal');

router.get('/', async (req, res) => {
    // let results = await getEverything();
    // array with mock data for testing and UI development
    const results = [
        {
            "first_name": "Rosana",
            "last_name": "Calton",
            "children": [
              {
                "gender": "Female",
                "name": "Maggi",
                "birth": "2/10/2022",
                "animal": "Suricate"
              },
              {
                "gender": "Female",
                "name": "Ava",
                "birth": "2/28/2022",
                "animal": "Bat-eared fox"
              },
              {
                "gender": "Bigender",
                "name": "Regine",
                "birth": "1/12/2022",
                "animal": "Snake, carpet"
              },
              {
                "gender": "Male",
                "name": "Adrian",
                "birth": "5/22/2021",
                "animal": "Bushpig"
              }
            ],
            "phrase": "Synergized logistical leverage",
            "story": "Livingstone College"
          }, {
            "first_name": "Cinnamon",
            "last_name": "Calcott",
            "children": [
              {
                "gender": "Female",
                "name": "Damara",
                "birth": "10/6/2021",
                "animal": "House crow"
              },
              {
                "gender": "Male",
                "name": "Aluino",
                "birth": "9/7/2021",
                "animal": "Laughing dove"
              },
              {
                "gender": "Female",
                "name": "Bess",
                "birth": "2/13/2022",
                "animal": "Tailless tenrec"
              },
              {
                "gender": "Female",
                "name": "Valida",
                "birth": "7/30/2021",
                "animal": "Blue and gold macaw"
              },
              {
                "gender": "Male",
                "name": "Randall",
                "birth": "2/17/2022",
                "animal": "Black-eyed bulbul"
              }
            ],
            "phrase": "Digitized disintermediate structure",
            "story": "Universidad de Viña del Mar"
          }, {
            "first_name": "Irvine",
            "last_name": "Baradel",
            "children": [
              {
                "gender": "Female",
                "name": "Imelda",
                "birth": "7/24/2021",
                "animal": "Shrike, crimson-breasted"
              },
              {
                "gender": "Male",
                "name": "Brook",
                "birth": "9/29/2021",
                "animal": "Gray rhea"
              },
              {
                "gender": "Genderqueer",
                "name": "Idalina",
                "birth": "5/29/2021",
                "animal": "Cormorant, pied"
              }
            ],
            "phrase": "Object-based radical infrastructure",
            "story": "Universitat de Barcelona"
            }
    ];
    console.log(results[0].children[0]);
    // res.render('search', {results});
});

module.exports = router