var userFeed = new Instafeed({
    get: 'user',
    userId: '2189029',
    sortBy: 'most-recent',
    limit: '8',
    clientId: '4209cf9e20964c979ecb17ccab490d7d',
    accessToken: '2189029.4209cf9.370b34604a234f6dac8dbc51c0944d49',
     template: '<li><a href="{{link}}" target="_blank" rel="nofollow"><img src="{{image}}"></a></li>',
});
userFeed.run();