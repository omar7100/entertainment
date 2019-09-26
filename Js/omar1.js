'use script'
//second java code
var callgif = function(){
/// input
var pic;
var select = prompt('What do you like most?');
/// process
while (select !== 'TV shows' && select !== 'show'){
   select = prompt('pleas pick "TV shows" or "show"');
}
if (select === 'Tv shows'){
   pic = '<img src=https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Prison_Break_season_1_dvd.jpg/220px-Prison_Break_season_1_dvd.jpg>'
} else if (select === 'show'){
   pic = '<img src=https://cima-now.com/wp-content/uploads/2019/06/%D9%85%D8%B3%D9%84%D8%B3%D9%84-Breaking-Bad-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9-%D9%85%D8%AA%D8%B1%D8%AC%D9%85.jpg>'
}
   return pic;
}