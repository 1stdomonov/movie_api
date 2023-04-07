//declare, require, and assign EXPRESS and MORGAN
const express = require('express');
morgan = require('morgan');

const app = express();

//create top 10 movies object
let topMovies = [
    {
      title: 'Brazil',
      Director: 'Terry Gilliam'
    },
    {
      title: 'Grand Budapest Hotel',
      Director: 'Wes Anderson'
    },
    {
      title: 'Sound of Metal',
      Director: 'Darius Marder'
    },
    {
        title: 'Lucky',
        Director: 'John Carroll Lynch'
    },
    {
        title: 'The Matrix',
        Director: 'Lilly Wachowski, Lana Wachowski'
    },
    {
        title: 'Lord of the Rings, the fellowship of the ring',
        Director: 'Peter Jackson'
    },
    {
        title: 'Cyrano de Bergerac',
        Director: 'Michael Gordon'
    },
    {
        title: 'The Ghost and the Darkness',
        Director: 'Stephen Hopkins'
    },
    {
        title: 'Jurrasic Park',
        Director: 'Steven Spielberg'
    },
  ];

  //static requests routed to public folder
  app.use(express.static('public'));

  //MORGAN to log requests to terminal
  app.use(morgan('common'));

  //GET requests
  app.get('/movies', (req, res) => {
    res.json(topMovies);
  });

  app.get('/', (req, res) => {
    res.send('Welcome to myFlix movie app!');
  });
  
//error handling
 app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
  });