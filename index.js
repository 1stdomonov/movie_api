//declare, require, and assign EXPRESS
const express = require('express');
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