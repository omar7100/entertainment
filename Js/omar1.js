'use script'
//second java code
var callgif = function(){
/// input
var gif;
var chose = prompt('What do you like most?');
/// process
while (chose !== 'anime' && chose !== 'movie'){
   chose = prompt('pleas pick "anime" or "movie"');
}
if (chose === 'anime'){
   gif = '<img src=https://upload.wikimedia.org/wikipedia/ar/8/84/Prison_Break_%28miniseries%29.jpg>'
} else if (chose === 'movie'){
   gif = '<img src=https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_UX477_CR0,0,477,268_AL_.jpg)>'

 }

return gif;
/// output
}