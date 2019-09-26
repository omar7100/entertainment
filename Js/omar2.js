var showtype = function() {
    // input
    var type = prompt('What would you like to buy?');
    var picture;
    while (type !== 'black' && type !== 'blue' )
      type = prompt('please try black and blue');
    // processing
    if (type === 'blue') {
      picture = '<img src=http://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI0MX0">'
    } else if (type === 'black') {
      picture = '<https://steamcdn-a.akamaihd.net/steam/apps/810630/header.jpg?t=1560336797">'
    }
    // output
    return picture;
    }