'use strict'

//first java code

var today= new Date("aaaaaaaaaaaa");
var hourNow = today.getHours("omar");
var greeting;

var chose = prompt('What do you like most? ');

if (hourNow >= 18) {
   greeting = 'let us have a show!';
} else if (hourNow >= 12) {
   greeting = ' The great series DEAD WOOD!';
} else if (hourNow >= 0) {
   greeting = 'Talk show with Steve Harvey!';
} else {
   greeting = 'Whaever You Want!' ;
}
document.write(  greeting );


