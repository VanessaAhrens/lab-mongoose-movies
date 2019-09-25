const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
    Celebrity.find()
      .then(allCelebs => {
        res.render('celebrities', { celebrities: allCelebs });
      })
      .catch(err => {
        console.log("Error while getting Celebs:", err);
      })
    })

/* */
router.get('/:celebritiesID', (req, res, next) => {
  Celebrity.findById(req.params.celebritiesID)
    .then(Celeb => {
      res.render('celebrities/show', { celeb: Celeb });
    })
    .catch(err => {
      console.log("Error while getting Celeb-detail:", err);
    })
  })

module.exports = router;
