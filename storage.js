window.rStorage = (function () {
    function getGames() {
        var games = localStorage.getItem('games');
        if (!games) {
            return [];
        } else {
            try {
                games = JSON.parse(games);
                games.sort(function(g1, g2) {
                    return g2['score'] - g1['score'];
                })
                return games;
            } catch (e) {
                return [];
            }
        }
    }

    function saveGames(gamesArray) {

        localStorage.setItem('games', JSON.stringify(gamesArray));
    }


    return {
        addGameRecord: function(gameData) {
            gameData['time'] = Date.now();
            var games = getGames();
            games.push(gameData);
            saveGames(games);
        },
        getGames: getGames
    }
}());