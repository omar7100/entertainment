'use strict'

//first java code
<<<<<<< HEAD
var today= new Date();
var hourNow = today.getHours();
=======

var today= new Date();
var hourNow = today.getHours();
>>>>>>> c78d5aad514d6090865af5bddcf2e7918029f66d
var greeting;
var chose = prompt('What do you like most? ');
if (hourNow >= 18) {
   greeting = 'deadwood!';
} else if (hourNow >= 12) {
   greeting = ' talkhsow!';
} else if (hourNow >= 0) {
   greeting = 'Tvtime!';
} else {
   greeting = 'Whaever You Want!' ;
}
document.write( ' <h3>' + greeting + ' </ h3>');
