'use strict'

//first java code
var today= new Date();
var hourNow = today.getHours();
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