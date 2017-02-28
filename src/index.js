'use strict';
var Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', 'Hallo Daniela, willkommen bei Outfittery! Wir haben gerade neue Frühlings- und Sommer - Outfits bekommen - möchtest du gleich eine Box bestellen?', 'Möchtest du eine neue Box bestellen?');
    },

    'AMAZON.YesIntent' : function() {
      this.emit( ':tell', 'Ok ich habe die Bestellung für dich aufgegeben. ')
    }
};
