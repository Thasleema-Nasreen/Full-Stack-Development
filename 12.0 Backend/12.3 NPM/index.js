
//var generateName = require("sillyname");
//var sillyName = generateName();
//console.log(`My name is ${sillyName}.`);


//import superheroes from "superheroes";
//const name = superheroes.default.random();
//console.log(`I am ${name}!`);

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const superheroes = require('superheroes');
