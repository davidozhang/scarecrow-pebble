/**
 * Scarecrow Pebble companion app - part of an Intel IOT Roadshow 2015 project
 *
 * Author: David Zhang
 */

var UI = require('ui');
var ajax = require('ajax');

var main = new UI.Card({
  title: 'Scarecrow',
  body: 'Unauthenticated.'
});

main.show();
poll();

var poll = function() {
    ajax({url: 'http://192.168.64.205:8080/auth', type: 'json'},
      function(data) {
        // Success!
        if (data.authStatus) {
            main.body('Authenticated.');
        } else {
            main.body('Unauthenticated.');
        }
        setTimeout(poll,5000);
      },
      function(error) {
        // Failure!
        console.log('Failed fetching data');
        setTimeout(poll,5000);
      }
    );
};
