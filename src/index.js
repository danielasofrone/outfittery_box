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
      this.emit( ':tell', 'Super. Ich brauche nur noch Details zu dem Inhalt deiner Box ')
    },
    'AMAZON.NoIntent' : function() {
      this.emit( ':tell', 'Ok, dann vielleicht nächstes Mal. Ich wünsche die noch einen schönen Tag. ')
    },
    'selectArticle' : function() {
      this.emit( ':ask', 'Was genau brauchst du? Oberteile, Hose oder Schuhe? Oder möchtest du neue Outfits? ')
    },

};

//ich werde sofort eine Box für dich packen lassen
