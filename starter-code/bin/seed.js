
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
//const movie = require(`../models/movies`);

const dbName = 'Celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const Celebrities = [
  {
    name: "Woody Allen",
    occupation: "Director",
    catchPhrase: "Whatever works"
  },
  {
    name: "Gustafo Dudamel",
    occupation: "Conductor",
    catchPhrase: "Let´s go Venezuela"
  },
  {
    name: "Anais Gaudemart",
    occupation: "Musician",
    catchPhrase: "Play Händel"
  }
]

//map Celebrity
//new Celebrity.movie

//const moviearr = [
//  {1, _id: new mongoose.Types.ObjectId.},
//  {2}
//]
Celebrity.create(Celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${Celebrities.length} celebrity`)
  mongoose.connection.close();
});